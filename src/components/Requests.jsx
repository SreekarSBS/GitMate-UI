import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {BASE_URL} from "../utils/constants"
import { useDispatch, useSelector } from 'react-redux';
import { addRequest, removeRequest } from '../utils/requestSlice';

const Requests = () => {
  const [errorMessage,setErrorMessage] = useState("No Requests Found");
  
  const dispatch = useDispatch()
  const request = useSelector((store) => store.request)
  useEffect(() => {
    fetchRequests()
  },[])

  const fetchRequests = async() => {
    try {
    const res = await axios.get(BASE_URL + "/user/requests/received",{withCredentials : true})
    dispatch(addRequest(res?.data?.data))
    
    console.log(res);
    }
    catch(err){
      setErrorMessage(err.response.data.message)
     
      console.log(err);
      
    }
    
  }

  const handleRequest = async(status,item) => {
    try {
      const id = item.fromUserId._id
      const path = `/request/review/${status}/${id}` 
      const res = await axios.post(BASE_URL + path,{} , {
        withCredentials : true
      })
      console.log(res);
      dispatch(removeRequest(item._id))
    }
    catch(err){
      console.log(err);    
    }
  }

  const handleViewProfile = async(item) => {
    try{
    const id = item.fromUserId._id
    const res = await axios.get(BASE_URL +"/profile/view/"+id,{withCredentials : true})
    console.log(res);
    }catch(err){
      
      console.log(err.message);
      
    }
    
  }

  console.log(request);
  
if(!request || request.length === 0) return <div className='flex justify-center mt-20'><div role="alert" className="alert alert-info w-1/2">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-current">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
<span>{errorMessage}</span>
</div></div>
  return <div className="flex justify-center m-8">
  
  <ul className="list bg-base-100 md:w-3/5 rounded-box shadow-md">
   
 <li className="p-4 pb-2 mb-6 text-3xl rounded-4xl bg-gradient-to-tr to-cyan-600 from-fuchsia-500 text-amber-50 text-center m-4 font-stretch-150% tracking-wide font-extralight">Requests</li>

 {request.map((item,id) => {
   
   return (
     <li onClick={() =>handleViewProfile(item)} key = {item.id} className={`list-row h-30 min-w-96 overflow-clip  ${id === request.length-1 ? "border-b-2 border-b-cyan-600 border-l-4 border-l-cyan-600" : "border-b-4 border-b-cyan-600  border-l-4 border-l-cyan-600"}  `}>
   <div className="text-4xl font-thin opacity-30 tabular-nums">0{id+1}</div>
   <div><img className="size-20 rounded-full" src={item.fromUserId.photoURL}/></div>
   <div className="list-col-grow text-sm lg:text-xl xl:text-2xl">
     <div>{item.fromUserId.firstName} {item.fromUserId.lastName || " "}</div>
     <div className="text-sm first-letter:uppercase font-semibold opacity-60"><span className="text-cyan-400">Gender: </span><span className='uppercase'>{item.fromUserId.gender}</span></div>
     <div className="text-sm first-letter:uppercase font-semibold opacity-60"><span className="text-cyan-400">Age: </span><span className='uppercase'>{item.fromUserId.age}</span></div>
     <div className="text-sm first-letter:uppercase font-semibold opacity-60"><span className="text-cyan-400">Skills: </span><span className=''>{item.fromUserId.skills.join(" ,")}</span></div>
     
   </div>
   <div className='flex-col flex '>
   <button onClick={() =>handleRequest("accepted",item)} className="btn btn-outline btn-success mb-1">Confirm</button>
<button onClick={() =>handleRequest("rejected",item)} className="btn btn-outline btn-error mt-1">Ignore</button>
</div>
 </li>
   )
 })  
 }

 

 
</ul>
   </div>;
}

export default Requests



