import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";


const GetStarted = () => {
  const [emailId, setEmailId] = useState();
  const [errorMessage,setErrorMessage] = useState(false)
    const navigate = useNavigate()

  const handleGetStarted = async () => {
    if(!emailId) setErrorMessage(true)
    const isUserLogin = await axios.post(
      BASE_URL +  "/status",
      { emailId },
      { withCredentials: true }
    );
   
    
    if(isUserLogin.data) {
        return navigate("/login",{ state : {emailId : emailId} })
    }
   else navigate("/signup",{ state : {emailId : emailId} })

  }
  return (
    <div
      className="hero h-[97vh] "
      style={{
        backgroundImage:
          "url(https://appinventiv.com/wp-content/uploads/2022/05/An-Ultimate-Guide-to-Social-Media-App-Development-in-2022-07-scaled.webp)",
      }}
    >
      <div className="hero-overlay bg-black opacity-60  "></div>
      <div className="hero-content text-neutral-content text-center mb-30">
        <div className="max-w-md text-blue-100">
          <h1 className="mb-5 text-5xl xl:text-6xl font-serif ">Get Started</h1>
          <p className="mb-5">Connecting Developers</p>
          
          <div className="flex items-center">
            <label className="floating-label w-full mr-2">
              <input
                onChange={(e) => setEmailId(e.target.value)}
                type="text"
                placeholder="EmailId"
                className="input input-lg xl:w-80"
              />
              <span>EmailId</span>
            </label>
            <button
              onClick={() =>handleGetStarted()}
              className="btn btn-primary ml-4 "
            >
              <span></span>Get Started
            </button>
            
          </div>
          {errorMessage && <p className="mt-4 text-lg font-semibold text-red-400 ">Please Enter a valid EmailID</p>}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
