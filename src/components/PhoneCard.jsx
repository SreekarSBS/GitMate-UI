const PhoneCard = ({ user }) => {
    const {
      photoURL,
      firstName,
      lastName,
      gender,
      age,
      about,
      location,
      skills,
    } = user;
  
    return (
        <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl shadow-lg flex flex-col overflow-hidden">
  <img
          src={photoURL || ""}
          alt={`${firstName}'s photo`}
          className="w-full h-1/2 object-cover"
        />
      <div className="p-2 sm:p-4 overflow-y-auto text-xs sm:text-lg text-black flex-1">
          <h3 className="text-xl sm:text-4xl font-light text-blue-600 mb-1">
            {firstName} {lastName || ""}
          </h3>
          <p><span className="font-bold">Gender:</span> {gender}</p>
          <p><span className="font-bold">Age:</span> {age}</p>
          <p><span className="font-bold">Skills:</span> {skills?.join(", ")}</p>
          <p><span className="font-bold">Location:</span> {location}</p>
          <p><span className="font-bold">About:</span> {about}</p>
        </div>
      </div>
    );
  };
  
  export default PhoneCard;
  