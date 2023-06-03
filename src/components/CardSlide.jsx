import { useState } from 'react';
import '../style/CardSlide.css';
import chevron from '../assets/small_chevron.svg';

export default function CardSlide({ text, className, children, margin }) {
  const [buttonOff, setButtonOff] = useState(false);
  const testClick = () => {
    setButtonOff(!buttonOff);
  };

  const buttonOpen = `card_paragraph ${buttonOff ? 'open' : ''}`;
  const rotateChevron = `card_chevron ${buttonOff ? 'rotate' : ''}`;
  const style = {
    marginBottom: { margin },
  };
  return (
    <div className={`card_content ${className}`} style={style}>
      <div className='card_header' onClick={testClick}>
        <p className='card_title'>{text}</p>
        <button>
          <img src={chevron} alt='' className={rotateChevron} />
        </button>
      </div>
      <div className={buttonOpen}>{children}</div>
    </div>
  );
}
