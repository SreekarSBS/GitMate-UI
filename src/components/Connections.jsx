import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";



const Connections = () => {
  const dispatch = useDispatch();

   const [errorMessage,setErrorMessage] = useState("No connections found for the user " );
   
  const connection = useSelector((store) => store.connection)
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
    const res = await axios.get(BASE_URL + "/user/connections", {
      withCredentials: true,
    });
    
    dispatch(addConnection(res?.data?.data))
   
     console.log(res?.data?.data);
  }catch(err){
    // console.log(err.message);
    setErrorMessage(err.response.data.message)
    
  }
  };

  const handleViewProfile = async(id) => {
    try{
   
    const res = await axios.get(BASE_URL +"/profile/view/"+id,{withCredentials : true})
    console.log(res);
    }catch(err){
      
      console.log(err);
      
    }
    
  }

//  console.log(connection);

  if(!connection) return <div className="flex justify-center mt-20">  <div role="alert" className="alert alert-warning flex ">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-current">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <span>{errorMessage}</span>
  </div>
  </div> 
  
  if(connection.length === 0) return <h1>No connections yet</h1>
  return <div className="flex justify-center mt-18">
  
   <ul className="list bg-base-100 w-3/5 rounded-box shadow-md">
    
  <li className="p-4 mb-6 pb-2 text-3xl rounded-4xl bg-gradient-to-tr from-cyan-600 to-fuchsia-500 text-amber-50 text-center m-4 font-stretch-150% tracking-wide font-extralight">Connections</li>
 
  {connection.map((item,id) => {
    
    return (
      <li onClick={() => handleViewProfile(item._id)}  key = {item.id} className={`list-row h-30  ${id === connection.length-1 ? "border-b-2 border-b-cyan-600 border-l-4 border-l-cyan-600" : "border-b-4 border-b-cyan-600  border-l-4 border-l-cyan-600"}  `}>
    <div className="text-4xl font-thin opacity-30 tabular-nums">0{id+1}</div>
    <div><img className="size-20 rounded-full" src={item.photoURL}/></div>
    <div className="list-col-grow lg:text-xl xl:text-2xl">
      <div>{item.firstName} {item.lastName || " "}</div>
      <div className="">
      <div className="text-sm first-letter:uppercase font-semibold opacity-60"><span className="text-cyan-400">Gender: </span>{item.gender}</div>
      <div className="text-sm first-letter:uppercase font-semibold opacity-60"><span className="text-cyan-400">Skills: </span>{item.skills.join(" ,")}</div>
      <div className="text-sm first-letter:uppercase font-semibold opacity-60"><span className="text-cyan-400">About: </span>{item.about}</div>
      </div>
    </div>
    <button className="btn btn-square btn-ghost">
      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
    </button>
  </li>
    )
  })  
  }

  

  
</ul>
    </div>;
};

export default Connections;
