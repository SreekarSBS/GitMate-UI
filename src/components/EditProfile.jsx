import { useState } from "react";
import PhoneCard from "./PhoneCard";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import Toast from "./Toast";
import { addUser } from "../utils/userSlice";

const EditProfile = ({user}) => {
 
    const [isError,SetIsError] = useState(false);
    const [showToast,SetShowToast] = useState(false);
    const [errorMessage,SetErrorMessage] = useState();
    const dispatch = useDispatch()
    console.log(user);
    
  const [formData, setFormData] = useState({
    firstName : user?.firstName,
    lastName :  user?.lastName,
    gender :  user?.gender,
    age :  user?.age,
    skills :  user?.skills,
    location :  user?.location,
    about :  user?.about,
    photoURL :  user?.photoURL
});


  
const saveProfile = async() => {
  try {
  
  const res =await axios.put(BASE_URL + "/profile/edit",
    formData
  ,
  {
    withCredentials : true,

  },)
  
  
  dispatch(addUser(res.data.data))
  console.log(res);
  SetShowToast(true)
  setTimeout(() => {
    SetShowToast(false)
  },3000)
}
catch(err){
  console.log(err);
  SetErrorMessage(err.message)
  SetIsError(true);
}
}

  return (
    <div className="flex justify-center">
      
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
              value={formData.skills}
              onChange={(e) => setFormData({...formData , skills: e.target.value})}
              type="text"
              placeholder="Info"
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
        <button onClick={saveProfile} className="btn btn-outline btn-accent ml-8 ">Save Profile</button>
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
};
export default EditProfile;
