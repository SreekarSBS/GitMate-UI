
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const SwipeCards = ({ cardData }) => {
  const [cards, setCards] = useState(cardData || []);
 
  return (
    <div
      className="grid h-[80vh] w-screen place-items-center select-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='1' stroke='%23d4d4d4' stroke-opacity='0.2'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
       
      }}
    >
      {cards.map((card) => (
        <Card
          key={card._id}
          {...card}
          setCards={setCards}
          cards={cards}
        />
      ))}
      {cards.length === 0 && (
        <div className="text-center text-gray-100 text-xl font-semibold">
          🎉 No more profiles!
        </div>
      )}
      
    </div>
  );
};


const Card = ({ _id, photoURL, firstName, lastName, gender, about , location , skills , age,  setCards, cards }) => {
  const x = useMotionValue(0);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
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
    if (Math.abs(direction) > 0) {
      setCards((prev) => prev.filter((v) => v._id !== _id));
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
        w-80 md:w-1/4 h-[75%] xl:h-[95%] transition-all duration-0 ease-in-out

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
        className="w-full  h-1/2  2xl:h-2/3 object-cover bg-"
      />
      <div className="2xl:p-4 px-6  md:pt-8 text-black overflow-y-scroll  flex-1 mx-4 xl:mx-8 my-4  rounded-4xl border-t-1 border-b-8 border-l-1 border-r-1 border-b-gray-950 ">
        <h3 className="text-gray-300 text-2xl xl:text-3xl font-light first-letter:font-bold first-letter:text-blue-600">
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



export default SwipeCards;

