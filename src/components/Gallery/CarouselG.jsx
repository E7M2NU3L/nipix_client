import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image1 from '../../assets/static/picturesquare-10.webp';
import Image2 from '../../assets/static/picturesquare-2.webp';
import Image3 from '../../assets/static/picturesquare-3.webp';
import Image4 from '../../assets/static/picturesquare-4.webp';
import Image5 from '../../assets/static/picturesquare-5.webp';
import './CarouselG.css'; // Import the CSS file

const CarouselG = () => {
  return (
    <div className='carousel-container'>
      <Carousel className='custom-carousel'>
        <div>
          <img src={Image1} alt="Slide 1" />
        </div>
        <div>
          <img src={Image2} alt="Slide 2" />
        </div>
        <div>
          <img src={Image3} alt="Slide 3" />
        </div>
        <div>
          <img src={Image4} alt="Slide 4" />
        </div>
        <div>
          <img src={Image5} alt="Slide 5" />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselG;
