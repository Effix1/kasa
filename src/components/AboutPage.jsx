import { useRef } from 'react';
import '../style/About.css';
import chevron from '../assets/Vector.png';

export default function AboutPage() {
  return <p>salut</p>;
}

/*const cardParagraphRef = useRef(null);
  const rotate = document.querySelector('about_button');

  const buttonOnClick = () => {
    const cardParagraph = cardParagraphRef.current;

    if (cardParagraph.style.display === 'block') {
      cardParagraph.style.display = 'none';
    } else {
      cardParagraph.style.display = 'block';
    }
    if (cardParagraph.style.display === 'block') {
      rotate.classList.add('rotate');
    }
  };

  return (
    <div className='about_content'>
      <div className='about_card'>
        <div className='about_action_bar'>
          <h2 className='about_tittle_card'>Fiabilité</h2>
          <button onClick={buttonOnClick}>
            <img src={chevron} alt='boutton' className='about_button' />
          </button>
        </div>
        <p className='card_paragraph slide-down' ref={cardParagraphRef}>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </div>
      <div className=' about_card card_respect'>
        <div className='about_action_bar'>
          <h2 className='about_tittle_card'>Respect</h2>
          <button onClick={buttonOnClick}>
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
          <h2 className='about_tittle_card'>Service</h2>
          <button onClick={buttonOnClick}>
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
          <h2 className='about_tittle_card'>Sécurité</h2>
          <button onClick={buttonOnClick}>
            <img src={chevron} alt='boutton' className='about_button' />
          </button>
        </div>
        <p className='card_paragraph slide-down' ref={cardParagraphRef}>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </div>
    </div>
  );*/
