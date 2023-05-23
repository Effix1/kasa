import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import chevronLeft from '../assets/chevron_left.png';
import chevronRight from '../assets/chevron_right.png';
import '../style/Slideshow.css';

export default function SlideShow({ images }) {
  const logement = useLoaderData();
  const pictures = logement.pictures;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const previousSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  return (
    <>
      <div className='contentSlideshow'>
        <img
          src={pictures[currentIndex]}
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
