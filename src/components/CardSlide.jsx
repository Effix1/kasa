import { useState } from 'react';
import '../style/CardSlide.css';
import chevron from '../assets/Vector.png';

export default function CardSlide({ text, className, children, margin }) {
  const [buttonOff, setButtonOff] = useState(false);
  const testClick = () => {
    setButtonOff(!buttonOff);
  };

  const buttonOpen = `card-paragraph ${buttonOff ? 'open' : ''}`;
  const rotateChevron = `card-chevron ${buttonOff ? 'rotate' : ''}`;
  const style = {
    marginBottom: { margin },
  };
  return (
    <div className={`card-content ${className}`} style={style}>
      <div className='header-card' onClick={testClick}>
        <p className='card-title'>{text}</p>
        <button className='card-button'>
          <img src={chevron} alt='' className={rotateChevron} />
        </button>
      </div>
      <div className={buttonOpen}>{children}</div>
    </div>
  );
}
