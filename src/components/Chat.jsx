import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";


const Chat = () => {
  const { targetUserId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("")
  const user = useSelector((store) => store.user);
  const [error,setError] = useState()
  const [profileData,setProfileData] = useState()
  const userId = user?._id;
  

  const chatContainerRef = useRef();
  useEffect(() => {
    if(!userId) return
    const socket = createSocketConnection();
    socket.emit("joinChat", {
      firstName: user.firstName,
      userId,
      targetUserId,
    });

    socket.on("messageReceived",({firstName,text,userId,createdAt,photoURL,id}) => {
      console.log(firstName + ": " + text);
      setMessages((messages) => [...messages,{firstName,text,userId,createdAt,photoURL,id}])
    })
    

    return () => {
      socket.disconnect();
    };
  }, [userId,targetUserId]);

  useEffect(() => {
    fetchChats()
    fetchProfile()
  },[])



  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth", // this makes it smooth
      });
    }
  }, [messages]);
  

  const fetchProfile = async() => {
    try{
    const res = await axios.get(BASE_URL+"/profile/view/"+targetUserId,{withCredentials : true});
    console.log(res?.data?.data);
    setProfileData(res?.data?.data)
    }catch(err){
      console.log(err.response);
      
    }
    
  }
  const fetchChats = async() => {
    try{
    const res = await axios.get(BASE_URL +`/chats/${targetUserId}`,{withCredentials : true})
     const chatsData =res?.data?.data?.messages.map((item) =>{
      const {firstName,photoURL ,_id} = item.senderId;
      return  {
        firstName,
        photoURL,
        text : item.text,
        id : item._id,
        senderId : _id,
        createdAt: item.createdAt,
      }
     });
    console.log(chatsData);
    
    setMessages(chatsData)
    }catch(err){
      console.log(err);
      setError(err.response.data)
    }
  }

  const sendMessage = () => {
    const socket = createSocketConnection()

    socket.emit("sendMessage",{firstName:user.firstName,userId,targetUserId,text:newMessage,photoURL:user?.photoURL})
    
    setNewMessage("")
  }

  if(error) return <div className='flex justify-center mt-20'><div role="alert" className="alert alert-info w-1/2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-current">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <span>{error}</span>
    </div></div>


  return (
    <div className="mx-auto my-10 rounded-4xl border-cyan-500 w-[50vh] md:w-1/2 border flex flex-col   h-[80vh]  ">
      <div className="w-full  btn font-stretch-125% text-gray-200 font-light flex items-center  rounded-full h-20 border-b-4 border-b-cyan-500 text-xl">
      <div class="avatarl ">
  <div class="ring-primary   m-2 ring-offset-base-100 w-12  ring-offset-2">
    <img className="rounded-full" src={profileData?.photoURL} />
  </div>
</div>
        {profileData?.firstName}  {profileData?.lastName}
      </div>
      <div  ref={chatContainerRef} className=" flex-1 overflow-scroll p-5">
        {messages.map((msg) => {
          return (
           
              <div key={msg.id} className={`chat py-4 ${msg?.senderId === userId || msg?.userId === userId ?"chat-end" : "chat-start"}`}>
                <div className="chat-image  avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src={msg?.photoURL}
                    />
                  </div>
                </div>
                <div  className="chat-header">
                  {msg.firstName}
                  <time className="text-xs opacity-50">{new Date(msg.createdAt).toLocaleTimeString([],{
                    hour: '2-digit',
                    minute: '2-digit',
                  })}</time>
                </div>
                <div  data-theme = "ice" className={`chat-bubble border-b ${msg?.senderId === userId || msg?.userId === userId ?"border-l" : "border-r"}`}>{msg.text}</div>
                <div className="chat-footer opacity-50">Delivered</div>
              </div>
         
            
          );
        })}
      </div>
      <div  className="p-5 border-t flex items-center  border-gray-600 gap-2">
        <input
         value={newMessage}
         onChange={(e) => setNewMessage(e.target.value)}
         className="overfow-scroll bg-base-200 flex-1 border border-gray-500 p-3 text-white h-full rounded-lg">

         </input>
        <button
        onClick={sendMessage}
        className="btn btn-primary">
          Send
          </button>
      </div>
    </div>
  );
};

export default Chat;
