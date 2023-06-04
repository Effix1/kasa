import { useState } from 'react';

import chevronLeft from '../assets/chevron_left.svg';
import chevronRight from '../assets/chevron_right.svg';
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
  const buttonaAppear = images.length > 1;
  return (
    <>
      <div className='slideshow_content'>
        <img
          src={images[currentIndex]}
          alt='slide'
          className='slideshow_picture'
        />
        <div className='chevron_content'>
          {buttonaAppear && (
            <div className='chevron' onClick={previousSlide}>
              <img src={chevronLeft} alt='previous' className='chevron_left' />
            </div>
          )}
          {buttonaAppear && (
            <div className='chevron' onClick={nextSlide}>
              <img src={chevronRight} alt='next' className='chevron_right' />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
