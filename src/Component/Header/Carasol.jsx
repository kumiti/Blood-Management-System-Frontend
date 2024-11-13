// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css' // Import custom styles
import p1 from './img/10002.jpg';
import p2 from './img/10001.jpg'
import p3 from './img/10003.jpg'
const CarouselPage = () => {
  return (
    <div className="flex justify-center">
      <Carousel
        showArrows={true}         // Show left and right arrows
        showIndicators={true}     // Show indicators
        showStatus={true}         // Hide status
        showThumbs={false}        // Disable thumbnails
        infiniteLoop={true}       // Allow infinite loop
        className="w-full "
      >
        <div className=" text-red-700 flex justify-center space-x-16">
          <img src={p2} alt="Logo" className="w-1/3" />
          <img src={p1} alt="Home" className="w-1/3" />
          <img src={p3} alt="Image 1" className="w-1/3" />
        </div>
        <div className="flex text-red-700 justify-center space-x-16">
          <img src={p1} alt="Logo" className="w-1/3" />
          <img src={p2} alt="Home" className="w-1/3" />
          <img src={p3} alt="Image 1" className="w-1/3" />
        </div>
        <div className="flex text-red-700 justify-center space-x-16">
          <img src={p3} alt="Logo" className="w-1/3" />
          <img src={p1} alt="Home" className="w-1/3" />
          <img src={p2} alt="Image 1" className="w-1/3" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselPage;