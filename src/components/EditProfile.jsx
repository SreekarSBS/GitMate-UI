import { useState } from "react";
import Card from "./Card";
import PhoneCard from "./PhoneCard";

const EditProfile = ({user}) => {
    
  const [formData, setFormData] = useState({
    firstName : user.firstName,
    lastName : user.lastName,
    gender : user.gender,
    skills : user.skills,
    location : user.location,
    about : user.about,
    photoURL : user.photoURL
});
  

  return (
    <div className="flex justify-center">
      <div className="mockup-code bg-primary-content w-full lg:w-2/3 p-4 lg:p-6 m-2 lg:m-10">

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
      </div>
      <div className="hidden lg:block mockup-phone">
  <div className="mockup-phone-camera"></div>
  <div className="mockup-phone-display flex  justify-center p-2">
    <div className="w-full h-[70%]   overflow-hidden">
      <PhoneCard user={formData} />
    </div>
  </div>
</div>

    </div>
  );
};
export default EditProfile;
