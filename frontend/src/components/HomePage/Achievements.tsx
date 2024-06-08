import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventCards from "./EventCards";
import { events } from '../assets/constants/index';

const Achievements: React.FC = () => {
  const settings: SliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0px",
    focusOnSelect: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="w-screen px-10 overflow-hidden h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 font-jk">
        Achievements <span className="text-orange-500"> and </span>Updates
      </h1>
      
      <Slider {...settings}>
        {events.map((card, index) => (
          <div key={card.title} className="flex justify-center items-center h-full">
            <EventCards
              imageSrc={card.img}
              title={card.title}
              description={card.description}
              style={card.style}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Achievements;

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  centerPadding: string;
  focusOnSelect: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  responsive?: Array<{
    breakpoint: number;
    settings: Partial<SliderSettings>;
  }>;
}
