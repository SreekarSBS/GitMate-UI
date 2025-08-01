import { useDispatch, useSelector } from "react-redux";
import {  Link, useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { removeUser } from "../utils/userSlice";
import { removeFeed } from "../utils/feedSlice";
import { removeConnection } from "../utils/connectionSlice";
import Dock from './Dock'; // Adjust path as needed
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";
import { BsPeopleFill } from "react-icons/bs"
import { MdPersonAdd } from "react-icons/md"



const Navbar = () => {
 const navigate = useNavigate()
 const location = useLocation()
 const dispatch = useDispatch()
 const user = useSelector((store) => store.user)   
  console.log(user);
  const handleLogout = async() => {
  try{
    await axios.post(BASE_URL + "/logout",{},{withCredentials : true}) 
    dispatch(removeUser())
    dispatch(removeFeed())
    dispatch(removeConnection())
    navigate("/auth")
  }
  catch(err){
    console.log("Failed to logout : " + err.message)
  
  }
  }
 
  const feedRedirect  = () => {
    const disAllow = ["/auth" , "/login" , "/signup" ]
    if(!disAllow.includes(location.pathname)) navigate("/");
  }
  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => navigate("/") },
    { icon: <BsPeopleFill size={22} />, label: 'Connections', onClick: () => navigate("/connections") },
    { icon: <MdPersonAdd size={22} />, label: 'Requests', onClick: () => navigate("/requests") },
    { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => navigate("/profile") },
    
  ];
  
    
    return <div data-theme = "night" className="navbar bg-base-300  border-b border-b-cyan-500/55 rounded-2xl shadow-2xl ">
    <div className="flex-1 flex ">
    <a onClick={feedRedirect}  class="btn btn-ghost h-26 text-3xl md:text-5xl">
      
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={window.innerWidth <400 ? "56" :"80"} height={window.innerWidth <400 ? "56" :"75"} preserveAspectRatio="xMinYMin meet" viewBox="0 0 256 259.3" id="github">
  <path fill="#9EDCF2" d="M200.9 199.8c0 13.9-32.2 25.1-71.9 25.1s-71.9-11.3-71.9-25.1c0-13.9 32.2-25.1 71.9-25.1s71.9 11.2 71.9 25.1zm0 0"></path>
  <defs>
    <path id="a" d="M98.1 244.8c1.6 7.5 5.5 11.9 9.4 14.5h41.1c5-3.4 10.1-9.8 10.1-21.8v-31s.6-7.7 7.7-10.2c0 0 4.1-2.9-.3-4.5 0 0-19.5-1.6-19.5 14.4v23.6s.8 8.7-3.8 12.3v-29.2s.3-9.3 5.1-12.8c0 0 3.2-5.7-3.8-4.2 0 0-13.4 1.9-14 17.6l-.3 30h-3.2l-.3-30c-.6-15.6-14-17.6-14-17.6-7-1.6-3.8 4.2-3.8 4.2 4.8 3.5 5.1 12.8 5.1 12.8v29.5c-4.6-3.3-3.8-12.6-3.8-12.6v-23.6c0-16-19.5-14.4-19.5-14.4-4.5 1.6-.3 4.5-.3 4.5 7 2.6 7.7 10.2 7.7 10.2v21.7l.4 16.6z"></path>
  </defs>
  <clipPath id="b">
    <use xlink:href="#a" overflow="visible"></use>
  </clipPath>
  <path fill="#7DBCE7" d="M200.9 199.8c0 13.9-32.2 25.1-71.9 25.1s-71.9-11.3-71.9-25.1c0-13.9 32.2-25.1 71.9-25.1s71.9 11.2 71.9 25.1zm0 0" clip-path="url(#b)"></path>
  <path fill="#9EDCF2" d="M46.9 125.9l-2.1 7.2s-.5 2.6 1.9 3.1c2.6-.1 2.4-2.5 2.2-3.2l-2-7.1zm0 0"></path>
  <path fill="#010101" d="M255.8 95.6l.2-.9c-21.1-4.2-42.7-4.3-55.8-3.7 2.1-7.7 2.8-16.7 2.8-26.6 0-14.3-5.4-25.7-14-34.3 1.5-4.9 3.5-15.8-2-29.7 0 0-9.8-3.1-32.1 11.8-8.7-2.2-18-3.3-27.3-3.3-10.2 0-20.5 1.3-30.2 3.9C74.4-2.9 64.3.3 64.3.3c-6.6 16.5-2.5 28.8-1.3 31.8-7.8 8.4-12.5 19.1-12.5 32.2 0 9.9 1.1 18.8 3.9 26.5-13.2-.5-34-.3-54.4 3.8l.2.9c20.4-4.1 41.4-4.2 54.5-3.7.6 1.6 1.3 3.2 2 4.7-13 .4-35.1 2.1-56.3 8.1l.3.9c21.4-6 43.7-7.6 56.6-8 7.8 14.4 23 23.8 50.2 26.7-3.9 2.6-7.8 7-9.4 14.5-5.3 2.5-21.9 8.7-31.9-8.5 0 0-5.6-10.2-16.3-11 0 0-10.4-.2-.7 6.5 0 0 6.9 3.3 11.7 15.6 0 0 6.3 21 36.4 14.2V177s-.6 7.7-7.7 10.2c0 0-4.2 2.9.3 4.5 0 0 19.5 1.6 19.5-14.4v-23.6s-.8-9.4 3.8-12.6v38.8s-.3 9.3-5.1 12.8c0 0-3.2 5.7 3.8 4.2 0 0 13.4-1.9 14-17.6l.3-39.3h3.2l.3 39.3c.6 15.6 14 17.6 14 17.6 7 1.6 3.8-4.2 3.8-4.2-4.8-3.5-5.1-12.8-5.1-12.8v-38.5c4.6 3.6 3.8 12.3 3.8 12.3v23.6c0 16 19.5 14.4 19.5 14.4 4.5-1.6.3-4.5.3-4.5-7-2.6-7.7-10.2-7.7-10.2v-31c0-12.1-5.1-18.5-10.1-21.8 29-2.9 42.9-12.2 49.3-26.8 12.7.3 35.6 1.9 57.4 8.1l.3-.9c-21.7-6.1-44.4-7.7-57.3-8.1.6-1.5 1.1-3 1.6-4.6 13.4-.5 35.1-.5 56.3 3.7zm0 0"></path>
  <path fill="#F5CCB3" d="M174.6 63.7c6.2 5.7 9.9 12.5 9.9 19.8 0 34.4-25.6 35.3-57.2 35.3S70.1 114 70.1 83.5c0-7.3 3.6-14.1 9.8-19.7 10.3-9.4 27.7-4.4 47.4-4.4s37-5.1 47.3 4.3zm0 0"></path>
  <path fill="#FFF" d="M108.3 85.3c0 9.5-5.3 17.1-11.9 17.1-6.6 0-11.9-7.7-11.9-17.1 0-9.5 5.3-17.1 11.9-17.1 6.6-.1 11.9 7.6 11.9 17.1zm0 0"></path>
  <path fill="#AF5C51" d="M104.5 85.5c0 6.3-3.6 11.4-7.9 11.4-4.4 0-7.9-5.1-7.9-11.4 0-6.3 3.6-11.4 7.9-11.4 4.3 0 7.9 5.1 7.9 11.4zm0 0"></path>
  <path fill="#FFF" d="M172.2 85.3c0 9.5-5.3 17.1-11.9 17.1-6.6 0-11.9-7.7-11.9-17.1 0-9.5 5.3-17.1 11.9-17.1 6.5-.1 11.9 7.6 11.9 17.1zm0 0"></path>
  <path fill="#AF5C51" d="M168.3 85.5c0 6.3-3.6 11.4-7.9 11.4-4.4 0-7.9-5.1-7.9-11.4 0-6.3 3.6-11.4 7.9-11.4 4.4 0 7.9 5.1 7.9 11.4zm0 0M130.5 100.5c0 1.6-1.3 3-3 3-1.6 0-3-1.3-3-3s1.3-3 3-3c1.6 0 3 1.3 3 3zm0 0M120.6 108c-.2-.5.1-1 .6-1.2.5-.2 1 .1 1.2.6.8 2.2 2.8 3.6 5.1 3.6s4.3-1.5 5.1-3.6c.2-.5.7-.8 1.2-.6.5.2.8.7.6 1.2-1 2.9-3.8 4.9-6.9 4.9-3.1 0-5.9-2-6.9-4.9zm0 0"></path>
  <path fill="#C4E5D9" d="M54.5 121.6c0 .8-.9 1.4-2.1 1.4-1.1 0-2.1-.6-2.1-1.4 0-.8.9-1.4 2.1-1.4 1.2 0 2.1.6 2.1 1.4zm0 0M60.3 124.8c0 .8-.9 1.4-2.1 1.4-1.1 0-2.1-.6-2.1-1.4 0-.8.9-1.4 2.1-1.4 1.2 0 2.1.6 2.1 1.4zm0 0M63.8 129c0 .8-.9 1.4-2.1 1.4-1.1 0-2.1-.6-2.1-1.4 0-.8.9-1.4 2.1-1.4 1.2-.1 2.1.6 2.1 1.4zm0 0M67 133.8c0 .8-.9 1.4-2.1 1.4-1.1 0-2.1-.6-2.1-1.4 0-.8.9-1.4 2.1-1.4 1.2-.1 2.1.6 2.1 1.4zm0 0M70.5 138.2c0 .8-.9 1.4-2.1 1.4-1.1 0-2.1-.6-2.1-1.4 0-.8.9-1.4 2.1-1.4 1.2 0 2.1.6 2.1 1.4zm0 0M75.3 142.1c0 .8-.9 1.4-2.1 1.4-1.1 0-2.1-.6-2.1-1.4 0-.8.9-1.4 2.1-1.4 1.2-.1 2.1.6 2.1 1.4zm0 0M82 144.6c0 .8-.9 1.4-2.1 1.4-1.1 0-2.1-.6-2.1-1.4 0-.8.9-1.4 2.1-1.4 1.2 0 2.1.6 2.1 1.4zm0 0M88.7 144.6c0 .8-.9 1.4-2.1 1.4-1.1 0-2.1-.6-2.1-1.4 0-.8.9-1.4 2.1-1.4 1.2 0 2.1.6 2.1 1.4zm0 0M95.5 143.5c0 .8-.9 1.4-2.1 1.4-1.1 0-2.1-.6-2.1-1.4 0-.8.9-1.4 2.1-1.4 1.1 0 2.1.6 2.1 1.4zm0 0"></path>
</svg>
<div className="font-extralight rounded font-stretch-200%  text-white">Git<span className=" font-semibold font-stretch-200% text-cyan-300">Mate</span></div>

 </a>
{ user &&   <div className="hidden flex-1 relative lg:flex justify-center items-center">
<div className="absolute cursor-pointer ">
    <Dock
      items={items}  
    />
</div></div>}
      </div>
      {location.pathname === "/signup" && <button onClick={()=>navigate("/login",{state : {emailId : null}})} className="btn btn-info  w-14 md:w-28">Sign In</button>}
     {location.pathname === "/auth" && <button onClick={()=>navigate("/login",{state : {emailId : null}})} className="btn btn-info text-xs sm:text-sm w-14 md:w-28">Sign In</button>}
     {location.pathname === "/login" && <button onClick={()=>navigate("/signup",{state : {emailId : null}})} className="btn btn-info w-28">Sign Up</button>}
    
  {user && <div className="flex items-center"> 
   
    
    <p className=" hidden lg:block m-4 text-blue-500 text-xl font-extralight font-stretch-200%">Welcome Back, {user.firstName}</p> 

    <div className="flex gap-2">
  
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src={user.photoURL || "https://www.webwise.ie/wp-content/uploads/2020/12/IMG1207.jpg"} />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li>
            <Link to = "/profile" className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li>
            <Link to = "/connections" className="justify-between">
              Connections
              <span className="badge">New</span>
            </Link>
          </li>
          <li>
            <Link to = "/requests" className="justify-between">
              Requests
              <span className="badge">New</span>
            </Link>
          </li>
          
          <li><a onClick={handleLogout}>Logout</a></li>
        </ul>
      </div>
    </div>
    </div>
    }
  </div>
}

export default Navbar