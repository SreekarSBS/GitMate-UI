import axios from 'axios';
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
import Toast from './Toast';
import PhoneCard from './PhoneCard';

const Signup = () => {
    const location = useLocation();
    const [isError,setIsError] = useState(false)
    const [errorMessage,setErrorMessage] = useState();
    const [showToast,setShowToast] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        emailId: location.state.emailId || "",
        password: "",
        gender: "",
        age: "",
        skills: [],
        location: "",
        about: "",
        photoURL: ""
      });
      

    const SignUp = async() => {
        try{
            const res = await axios.post(BASE_URL + "/signup" ,formData, {
                withCredentials : true
            })
            console.log(res);
            setShowToast(true)
        }
        catch(err){
            console.log(err.message);
            setErrorMessage(err.message)
            setIsError(true);
        }
    }


  return (<div className="flex justify-center">
      
  <div className="mockup-code bg-primary-content w-full lg:w-1/2 p-4 lg:p-6 m-2 lg:m-10 2xl:w-2/6 ">
  
    <pre data-prefix="$">
      <code>
        <span className="text-sm">FirstName :</span>
        <input
          value={formData.firstName}
          onChange={(e) => setFormData({...formData , firstName: e.target.value})}
          type="text"
          placeholder="Info"
          className="m-6    text-green-600 input input-info"
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
          className="m-6 text-green-600 input input-info"
        />
      </code>
    </pre>
    <pre data-prefix=">" className="text-accent">
      <code>
        emailId :{" "}
        <input
          value={formData.emailId}
          onChange={(e) => setFormData({...formData , emailId: e.target.value})}
          type="text"
          placeholder="Info"
          className="m-6 text-green-600 input input-info"
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
          className="m-6 text-green-600 input input-info"
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
          className="m-6 text-green-600 input input-info"
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
          className="m-6 text-green-600 input input-info"
        />
      </code>
    </pre>
    <pre data-prefix=">" className="text-secondary">
      <code>
        Skills :{"   "}
        <input
  value={formData.skills.join(", ")}
  onChange={(e) =>
    setFormData({
      ...formData,
      skills: e.target.value.split(",").map((s) => s.trim()),
    })
  }
  type="text"
  placeholder="e.g. React, Node.js"
  className="m-6 text-green-600 input input-info"
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
          className="m-6 text-green-600 input input-info"
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
          className="m-6 text-green-600 input input-info"
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
          className="m-6 text-green-600 input input-info"
        />
      </code>
      
    </pre>
    <button onClick={SignUp} className="btn btn-outline btn-accent ml-8 ">Sign Up</button>
    <p className="text-xl text-red-600">{isError && errorMessage}</p>
    { showToast &&  <Toast /> }
  </div>

  <div className="hidden lg:block mockup-phone">
<div className="mockup-phone-camera border "></div>
<div className="mockup-phone-display flex  justify-center p-2">
<div className="w-full h-[90%]   overflow-hidden">
  
  <PhoneCard user={formData} />
  
</div>

</div>
</div>

</div>

);
}

export default Signup
