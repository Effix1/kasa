import { useState } from 'react';

import chevronLeft from '../assets/chevron_left.png';
import chevronRight from '../assets/chevron_right.png';
import '../style/Slideshow.css';

export default function SlideShow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return images.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  return (
    <>
      <div className='contentSlideshow'>
        <img
          src={images[currentIndex]}
          alt='slide'
          className='slideshowPicture'
        />
        <div className='chevron-content'>
          <img
            src={chevronLeft}
            alt='previous'
            className='chevronleft'
            onClick={previousSlide}
          />
          <img
            src={chevronRight}
            alt='next'
            className='chevronright'
            onClick={nextSlide}
          />
        </div>
      </div>
    </>
  );
}
