import { Link } from 'react-router-dom';
import '../style/Gallery.css';
import '../style/card.css';

export default function Card({ cover, title }) {
  return (
    <>
      <div className='card_logement'>
        <Link to='/'></Link>
        <img src={cover} alt='logement' className='image_card' />
        <p className='location-title'>{title}</p>
      </div>
    </>
  );
}
