import { useState } from 'react';
import '../style/CardSlide.css';
import chevron from '../assets/Vector.png';

export default function CardSlide({ text, textContent }) {
  const [buttonOff, setButtonOff] = useState(false);
  const testClick = () => {
    setButtonOff(!buttonOff);
  };

  const buttonOpen = `card-paragraph ${buttonOff ? 'open' : ''}`;
  const rotateChevron = `card-chevron ${buttonOff ? 'rotate' : ''}`;
  return (
    <div className='card-content'>
      <div className='header-card'>
        <p className='card-title'>{text}</p>
        <button className='card-button' onClick={testClick}>
          <img src={chevron} alt='' className={rotateChevron} />
        </button>
      </div>
      <div className={buttonOpen}>
        <p>{textContent}</p>
      </div>
    </div>
  );
}
