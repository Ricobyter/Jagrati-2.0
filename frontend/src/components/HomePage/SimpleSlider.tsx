import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SliderProps {
  slides: JSX.Element[];
}

const SimpleSlider: React.FC<SliderProps> = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    swipe: true, // Enable swipe functionality
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>{slide}</div>
      ))}
    </Slider>
  );
};

export default SimpleSlider;