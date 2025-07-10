import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const SwipeCards = ({ cardData }) => {
  const [cards, setCards] = React.useState(cardData || []);

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

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 100) {
      // Optional: Call API based on direction
      // if (x.get() > 100) axios.post("/interested", {_id})
      // else axios.post("/ignored", {_id})

      setCards((prev) => prev.filter((v) => v._id !== _id));
    }
  };

  return (
    <motion.div
      className="h-3/4 w-1/5 bg-blue-600 rounded-xl shadow-lg overflow-hidden relative flex flex-col"
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
        src={photoURL || "https://t3.ftcdn.net/jpg/07/24/59/76/360_F_724597608_pmo5BsVumFcFyHJKlASG2Y2KpkkfiYUU.jpg"}
        alt={`${firstName}'s photo`}
        className="w-full h-2/3 object-cover"
      />
      <div className="p-3 text-black flex-1">
        <h3 className="font-bold text-lg">{firstName} {lastName || ""}</h3>
         <p className="text-sm text-gray-600">Gender: {gender}</p>
         <p></p>
      </div>
    </motion.div>
  );
};


export default SwipeCards;

