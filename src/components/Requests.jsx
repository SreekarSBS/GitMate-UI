import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {BASE_URL} from "../utils/constants"
import { useDispatch, useSelector } from 'react-redux';
import { addRequest } from '../utils/requestSlice';
const Requests = () => {
  const [errorMessage,setErrorMessage] = useState();
  const [isEmpty,setIsEmpty] = useState(true);
  const dispatch = useDispatch()
  const request = useSelector((store) => store.request)
  useEffect(() => {
    fetchRequests()
  },[])

  const fetchRequests = async() => {
    try {
    const res = await axios.get(BASE_URL + "/user/requests/received",{withCredentials : true})
    dispatch(addRequest(res?.data?.data))
    setIsEmpty(false)
    console.log(res);
    }
    catch(err){
      setErrorMessage(err.response.data.message)
      setIsEmpty(true)
      console.log(err);
      
    }
    
  }
  console.log(request);
  
if(!request) return <div role="alert" className="alert alert-info w-1/2">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-current">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
<span>{errorMessage}</span>
</div>
  return <div className="flex justify-center mt-18">
  
  <ul className="list bg-base-100 w-3/5 rounded-box shadow-md">
   
 <li className="p-4 pb-2 text-3xl rounded-4xl bg-gradient-to-tr to-cyan-600 from-fuchsia-500 text-amber-50 text-center m-4 font-stretch-150% tracking-wide font-extralight">Requests</li>

 {request.map((item,id) => {
   
   return (
     <li key = {item.id} className="list-row border border-b-base-100 ">
   <div className="text-4xl font-thin opacity-30 tabular-nums">0{id+1}</div>
   <div><img className="size-20 rounded-full" src={item.fromUserId.photoURL}/></div>
   <div className="list-col-grow lg:text-xl xl:text-2xl">
     <div>{item.fromUserId.firstName} {item.fromUserId.lastName || " "}</div>
     <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
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
}

export default Requests



