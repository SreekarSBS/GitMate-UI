
import {  useEffect, useState } from "react";
import Card from "./Card";

const SwipeCards = ({ cardData,onEmpty }) => {
  const [cards, setCards] = useState(cardData || []);
  
  useEffect(() => {
    setCards(cardData);
  }, [cardData]);

  // Call onEmpty when all cards are swiped
 

  return (
    <div
      className="grid h-[80vh] w-screen place-items-center select-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='1' stroke='%23d4d4d4' stroke-opacity='0.2'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
       
      }}
    >
      {cards.map((card,idx) => (
        <Card
          key={card._id}
          {...card}
          setCards={setCards}
          lastCard = {idx === 0}
          cards={cards}
          onEmpty={onEmpty}
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






export default SwipeCards;
