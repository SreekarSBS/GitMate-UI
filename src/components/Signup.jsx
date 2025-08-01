import axios from 'axios';
import {  useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
import Toast from './Toast';
import PhoneCard from './PhoneCard';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Signup = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const [isError,setIsError] = useState(false)
    const dispatch = useDispatch()
    const [errorMessage,setErrorMessage] = useState("");
    const [showToast,setShowToast] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        emailId: location?.state?.emailId || "",
        password: "",
        gender: "",
        age: "",
        skills: "",
        location: "",
        about: "",
        photoURL: "https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg"
      });
      
  

    const SignUp = async() => {
        try{
          if (!formData?.firstName || !formData?.emailId || !formData.password) {
            setErrorMessage("First name, email, and password are required.");
            setIsError(true);
            return;
          }
          if (formData.password.length < 6) {
            setErrorMessage("Password must be at least 6 characters.");
            setIsError(true);
            return;
          }
          
          const payload = {
            ...formData,
            skills: formData.skills.split(/[, ]+/).map((s) => s.trim()).filter(Boolean), // filter(Boolean) removes empty entries
          };
          console.log("Payload before signup:", payload);

            const res = await axios.post(BASE_URL + "/signup" ,payload, {
                withCredentials : true
            })
            console.log(res);
            if (res?.status === 200) {
              setShowToast(true);
              dispatch(addUser(res.data.data));
              navigate("/");
            }
            
        }
        catch(err){
          console.error(err);
          const serverMsg = err.response?.data || err.message || "Signup failed.";
          setErrorMessage(serverMsg.toString());
          setIsError(true);
      }
      
    }


  return (<div className="flex flex-col md:flex-row justify-center mt-10 ">
      
  <div className="mockup-code  bg-primary-content  m-auto md:w-1/2 lg:w-2/5 p-4 lg:p-6 md:m-2 lg:m-10  ">
  
    <pre data-prefix="$">
      <code>
        <span className="text-sm">FirstName :</span>
        <input
          value={formData.firstName}
          onChange={(e) => setFormData({...formData , firstName: e.target.value})}
          type="text"
          placeholder="Info"
          className="m-6 w-50 md:w-40  lg:w-80 text-green-600 input input-info"
        />
      </code>
    </pre>
    <pre data-prefix=">" className="text-warning">
      <code>
        LastName :{" "}
        <input
          value={formData.lastName}
          onChange={(e) => setFormData({...formData , lastName: e.target.value})}
          type="text"
          placeholder="Info"
          className="m-6 w-50 md:w-40  lg:w-80 text-green-600 input input-info"
        />
      </code>
    </pre>
    <pre data-prefix=">" className="text-accent">
      <code>
        emailId : {" "}
        <input
          value={formData.emailId}
          onChange={(e) => setFormData({...formData , emailId: e.target.value})}
          type="text"
          placeholder="Info"
          className="m-6 w-50 md:w-40  lg:w-80 text-green-600 input input-info"
        />
      </code>
    </pre>
    <pre data-prefix=">" className="text-secondary">
      <code>
        Password :{" "}
        <input
          value={formData.password}
          onChange={(e) => setFormData({...formData , password: e.target.value})}
          type="password"
          placeholder="Info"
          className="m-6 w-50 md:w-40 lg:w-80 text-green-600 input input-info"
        />
      </code>
    </pre>
    <pre data-prefix=">" className="text-primary">
      <code>
        Gender :{"   "}
        <input
          value={formData.gender}
          onChange={(e) => setFormData({...formData , gender: e.target.value})}
          type="text"
          placeholder="Info"
          className="m-6 w-50 md:w-40 lg:w-80 text-green-600 input input-info"
        />
      </code>
    </pre>
    <pre data-prefix=">" className="text-primary">
      <code>
        Age :{"      "}
        <input
          value={formData.age}
          onChange={(e) => setFormData({...formData , age: e.target.value})}
          type="text"
          placeholder="Info"
          className="m-6 w-50 md:w-40  lg:w-80 text-green-600 input input-info"
        />
      </code>
    </pre>
    <pre data-prefix=">" className="text-secondary">
      <code>
        Skills :{"   "}
        <input
  value={formData.skills}
  onChange={(e) =>
    setFormData({
      ...formData,
      skills: e.target.value.trimStart()})}
  
  type="text"
  placeholder="e.g. React, Node.js"
  className="m-6 w-50 md:w-40  lg:w-80 text-green-600 input input-info"
/>

      </code>
    </pre>
    <pre data-prefix=">" className="text-accent">
      <code>
        Location :{" "}
        <input
          value={formData.location}
          onChange={(e) => setFormData({...formData , location: e.target.value})}
          type="text"
          placeholder="Info"
          className="m-6 w-50 md:w-40  lg:w-80 text-green-600 input input-info"
        />
      </code>
    </pre>
    <pre data-prefix=">" className="text-error">
      <code>
        About :{"    "}
        <input
          value={formData.about}
          onChange={(e) => setFormData({...formData , about: e.target.value})}
          type="text"
          placeholder="Info"
          className="m-6 w-50 md:w-40  lg:w-80 text-green-600 input input-info"
        />
      </code>
    </pre>
    <pre data-prefix=">" className="text-gray-100">
      <code>
        photoURL :{" "}
        <input
          value={formData.photoURL}
          onChange={(e) => setFormData({...formData , photoURL: e.target.value})}
          type="text"
          placeholder="Info"
          className="m-6 w-50 md:w-40  lg:w-80 text-green-600 input input-info"
        />
      </code>
      
    </pre>
    <button onClick={SignUp} className="btn btn-outline btn-accent  ml-8 ">Sign Up</button>
    <p className="text-xl text-red-600">{isError && errorMessage}</p>
    { showToast &&  <Toast /> }
  </div>

  <div className=" flex flex-col mt-6 md:mt-8  items-center w-[430px]  m-auto md:m-0  mockup-phone h-1/2">
<div className="mockup-phone-camera border  "></div>
<div className="mockup-phone-display flex  justify-center p-2">
<div className="w-full h-[90%] mt-6  overflow-hidden">
  
  <PhoneCard user={formData} />
  
</div>

</div>
</div>

</div>

);
}

export default Signup
