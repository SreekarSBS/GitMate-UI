import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
 
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const location = useLocation();
  const [emailId, setEmailId] = useState(location.state.emailId);
  const dispatch = useDispatch();
  
  const handleLogIn = async () => {
    try {
      const res = await axios.post("http://localhost:3000/login", {
        emailId,
        password,
      },{withCredentials : true});
      console.log(res.data);
      dispatch(addUser(res.data))
      navigate("/feed")
    } catch (res) {
      console.log("Failed to Log In :" + res);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div
        data-theme="night"
        className="card bg-neutral text-neutral-content w-96"
      >
        <div className="card-body items-center text-center">
          <h2 className="card-title">Login</h2>
          <div className="">
            <label className="input  validator my-2">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>

              <input
               
                value={emailId}
                
                onChange={(e) => setEmailId(e.target.value)}
                type="email"
                placeholder="mail@site.com"
                required
              />
            </label>
            <label className="input  validator my-2">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                minlength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          <div className="card-actions justify-end">
            <button onClick={handleLogIn} className="btn btn-primary">
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
