import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Chat = () => {
  const { targetUserId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState()
  const user = useSelector((store) => store.user);
  const userId = user?._id;
  const photo = user?.photoURL
  useEffect(() => {
    if(!userId) return
    const socket = createSocketConnection();
    socket.emit("joinChat", {
      firstName: user.firstName,
      userId,
      targetUserId,
    });

    socket.on("messageReceived",({firstName,text,userId,photo,createdAt}) => {
      console.log(firstName + ": " + text);
      setMessages((messages) => [...messages,{firstName,text,userId,photo,createdAt}])
      
    })
    fetchChats()

    return () => {
      socket.disconnect();
    };
  }, [userId,targetUserId]);

  const fetchChats = async() => {
    try{
    const chatsData = await axios.get(BASE_URL +`/chats/${targetUserId}`,{withCredentials : true})
    console.log(chatsData?.data?.data?.messages);
    
    setMessages(chatsData?.data?.data?.messages)
    }catch(err){
      console.log(err.message);
      
    }
  }

  const sendMessage = () => {
    const socket = createSocketConnection()

    socket.emit("sendMessage",{firstName:user.firstName,userId,targetUserId,text:newMessage,photo})
    setNewMessage("")
  }

  return (
    <div className="mx-auto my-10 rounded-lg border-cyan-500 w-[50vh] md:w-1/2 border flex flex-col   h-[80vh]  ">
      <div className="w-full rounded-3xl h-20 btn border-b-6 border-b-cyan-500 text-2xl">
        Chat
      </div>
      <div className="flex-1 overflow-scroll p-5">
        {messages.map((msg) => {
          return (
           
              <div key={msg._id} className={`chat ${msg?.senderId?._id === userId ?"chat-end" : "chat-start"}`}>
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src={msg.senderId.photoURL}
                    />
                  </div>
                </div>
                <div className="chat-header">
                  {msg.firstName}
                  <time className="text-xs opacity-50">{new Date(msg.createdAt).toLocaleTimeString([],{
                    hour: '2-digit',
                    minute: '2-digit',
                  })}</time>
                </div>
                <div className="chat-bubble">{msg.text}</div>
                <div className="chat-footer opacity-50">Delivered</div>
              </div>
         
            
          );
        })}
      </div>
      <div className="p-5 border-t flex items-center  border-gray-600 gap-2">
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
