
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


const Card = ({ _id, photoURL, firstName, lastName, gender, setCards, cards }) => {
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
        w-80 md:w-96 h-[75%] transition-all duration-0 ease-in-out

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
          "https://t3.ftcdn.net/jpg/07/24/59/76/360_F_724597608_pmo5BsVumFcFyHJKlASG2Y2KpkkfiYUU.jpg"
        }
        alt={`${firstName}'s photo`}
        className="w-full h-2/3 object-cover bg-"
      />
      <div className="p-4 text-black text-center flex-1 mx-12 mb-12 rounded-4xl bg-amber-50 ">
        <h3 className="font-semibold  text-4xl">
          {firstName} {lastName || ""}
        </h3>
        <p className="text-sm text-gray-600">Gender: {gender}</p>
      </div>
    </motion.div>
  );
};



export default SwipeCards;

