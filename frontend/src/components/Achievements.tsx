import { useState } from "react";
import EventCards from "./EventCards";
import events from "../assets/constants";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function Achievements() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? events.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === events.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-screen px-10 overflow-hidden h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 font-jk">Achievements <span className="text-orange-500"> and </span>Updates</h1>
      <div className="slider-container relative flex items-center">
        <div
          className="absolute left-10 z-10 top-40 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={prevSlide}
        >
          <BsChevronCompactLeft size={30} />
        </div>
        {events.map((card, index) => {
          const offset = index - currentIndex;
          const isVisible = Math.abs(offset) <= 1;

          return (
            <div
              key={card.title}
              className={`shadow-xl w-full flex justify-center h-full absolute transition-transform duration-300 ease-in-out ${
                isVisible ? "" : "opacity-0 pointer-events-none"
              }`}
              style={{ left: `${offset * 100}%`, }}
            >
              <EventCards
                imageSrc={card.img}
                title={card.title}
                description={card.description}
                style={card.style}
              />
            </div>
          );
        })}
        <div
          className="absolute right-10 z-10 top-40 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={nextSlide}
        >
          <BsChevronCompactRight size={30} />
        </div>
      </div>
    </div>
  );
}
