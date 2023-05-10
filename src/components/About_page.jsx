import { useRef } from 'react';
import '../style/About.css';
import chevron from '../assets/Vector.png';

export default function AboutPage() {
  const cardParagraphRef = useRef(null);

  const handleButtonClick = () => {
    const cardParagraph = cardParagraphRef.current;

    if (cardParagraph.style.display === 'block') {
      cardParagraph.style.display = 'none';
    } else {
      cardParagraph.style.display = 'block';
    }
  };

  return (
    <div className='about_content'>
      <div className='about_card'>
        <h2>Fiabilité</h2>
      </div>
      <div className=' about_card card_respect'>
        <div className='about_action_bar'>
          <h2>Respect</h2>
          <button onClick={handleButtonClick}>
            <img src={chevron} alt='boutton' className='about_button' />
          </button>
        </div>
        <p className='card_paragraph slide-down' ref={cardParagraphRef}>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </div>
      <div className='about_card'>
        <div className='about_action_bar'>
          <h2>Service</h2>

          <img src={chevron} alt='boutton' className='about_button' />
        </div>
      </div>
      <div className='about_card'>
        <h2>Sécurité</h2>
      </div>
    </div>
  );
}
