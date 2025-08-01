import axios from "axios";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { removeUserfromFeed } from "../utils/feedSlice";
 import { useDispatch } from "react-redux";

const Card = ({ _id, photoURL, firstName, lastName, gender, about , location , skills , age, setCards,lastCard,cards,onEmpty }) => {
   const dispatch = useDispatch()
    const x = useMotionValue(0);
    const rotateRaw = useTransform(x, [-200, 200], [-18, 18]);
    const opacity = useTransform(x, [-600, 0, 600], [0.5, 1, 0.5]);
    const isFront = _id === cards[cards.length - 1]?._id;
  
    const rotate = useTransform(x, (latestX) => {
      const offset = isFront ? 0 : _id.length % 2 ? 6 : -6;
      return `${rotateRaw.get() + offset}deg`;
    });
  
    const [isInterested, setIsInterested] = useState(null);
  
    // 🔄 update on motion value change
    useEffect(() => {
      const unsubscribe = x.on("change", (latest) => {
        if (latest > 0) {
          setIsInterested(true);
        } else if (latest < 0) {
          setIsInterested(false);
        } else {
          setIsInterested(null);
        }
      });
    
      return () => unsubscribe();
    }, [x]);
    
  
    const handleDragEnd = async () => {
      const direction = x.get();
      const threshold = window.innerWidth < 768 ? 60 : 200;
      if (Math.abs(direction) > threshold) {
       
        setCards((prev) => prev.filter((c) => c._id !== _id));

        // if that was truly the last card, trigger next page
        if (lastCard) onEmpty();
  

        try {
          if(direction > 0){
            const res = await axios.post(BASE_URL +`/request/send/interested/${_id}`,{},{withCredentials : true})
            console.log(res);
            
             dispatch(removeUserfromFeed(_id))
            
          }
          else {
            const res = await axios.post(BASE_URL +`/request/send/ignored/${_id}`,{},{withCredentials : true});
            console.log(res);
            
             dispatch(removeUserfromFeed(_id))
            
          }
         
        }
        catch(err){
          console.log(err);
          
        }
      } else{
        x.set(0)
      }
     
    };
  
    const cardColor = isInterested === true
      ? "bg-gradient-to-r from-emerald-400 to-green-500 "
      : isInterested === false
      ? "bg-red-600"
      : "bg-gradient-to-r from-cyan-400 to-blue-500";
  
    return (
      <motion.div
        className={`
          w-80 md:w-2/5 xl:w-2/7 lg:h-[90%] 2xl:w-1/4 h-[75%] xl:h-[95%] transition-all duration-0 ease-in-out
         
          ${cardColor} 
          rounded-xl shadow-2xl overflow-hidden 
          relative flex flex-col transition-colors duration-300
        `}
        style={{
          gridRow: 1,
          gridColumn: 1,
          x,
          opacity,
          rotate,
          zIndex: isFront ? 10 : 1,
        }}
        drag={isFront ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
      >
        <img 
          src={
            photoURL ||
            ""
          }
          alt={`${firstName}'s photo`}
          className="w-full  h-3/5 lg:h-3/5  2xl:h-2/3 object-cover pointer-events-none "
        />
        <div className="2xl:p-4   px-6  md:pt-8 text-black overflow-y-scroll  flex-1 mx-4 xl:mx-8 my-2  rounded-4xl border-t-1 border-b-8 border-l-1 border-r-1 border-b-gray-950 ">
          <h3 className="text-gray-300  text-2xl lg:text-4xl xl:text-3xl font-light first-letter:font-bold first-letter:text-blue-600">
            {firstName} {lastName || ""}
          </h3>
          <p className=" text-gray-800 xl:text-lg font-light"><span className="font-bold">Gender</span>: {gender}</p>
          <p className=" text-gray-800 xl:text-lg font-light"><span className="font-bold">Age</span>: {age}</p>
          <p className=" text-gray-800 xl:text-lg font-light"><span className="overflow-hidden font-bold">Skills</span>: {skills.join(" , ")}</p>
          <p className=" text-gray-800 xl:text-lg font-light"><span className="font-bold">Location</span>: {location}</p>
          <p className=" text-gray-800 xl:text-lg font-light"><span className="font-bold">About</span>: {about}</p>
        </div>
      </motion.div>
    );
  };

  export default Card;