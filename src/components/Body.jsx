import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";


const Body = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const userData = useSelector((store) => store.user)

  const fetchUser = async () => {
    
    try {
 
    const res = await axios.get(BASE_URL + "/profile/view",{},{withCredentials : true});
    dispatch(addUser(res.data.data))
     
    console.log(res);
    }
  
    catch(err){
      navigate("/auth")
      console.log(err.message)
    }
  };

  useEffect(() => {
   
    fetchUser();
  }, []);

  useEffect(() => {
    if (userData && location.pathname === "/auth") {
      navigate("/", { replace: true });
    }
   
  }, [userData, location.pathname]);


  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;