import { useState } from 'react';

import chevronLeft from '../assets/chevronleft.svg';
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
          <div className='chevron' onClick={previousSlide}>
            <img src={chevronLeft} alt='previous' className='chevronleft' />
          </div>
          <div className='chevron' onClick={nextSlide}>
            <img src={chevronRight} alt='next' className='chevronright' />
          </div>
        </div>
      </div>
    </>
  );
}
