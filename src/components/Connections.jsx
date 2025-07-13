import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";



const Connections = () => {
  const dispatch = useDispatch();

  const connection = useSelector((store) => store.connection)
  useEffect(() => {
    fetchData();
  }, [connection]);

  const fetchData = async () => {
    try {
    const res = await axios.get(BASE_URL + "/user/connections", {
      withCredentials: true,
    });
    dispatch(addConnection(res?.data?.data))
    console.log(res?.data?.data);
  }catch(err){
    console.log(err.message);
  }
  };
console.log(connection);

  if(!connection) return 
  connection.length === 0 && <h1>No connections yet</h1>
  return <div className="flex justify-center mt-18">
   <ul className="list bg-base-100 w-3/5 rounded-box shadow-md">
  
  <li className="p-4 pb-2 text-3xl rounded-4xl bg-gradient-to-tr from-cyan-600 to-fuchsia-500 text-amber-50 text-center m-4 font-stretch-150% tracking-wide font-extralight">Connections</li>
 
  {connection.map((item,id) => {
    
    return (
      <li key = {item.id} className="list-row border border-b-base-100 ">
    <div className="text-4xl font-thin opacity-30 tabular-nums">0{id+1}</div>
    <div><img className="size-20 rounded-full" src={item.photoURL}/></div>
    <div className="list-col-grow lg:text-xl xl:text-2xl">
      <div>{item.firstName} {item.lastName || " "}</div>
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
};

export default Connections;
