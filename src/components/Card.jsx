import '../style/Gallery.css';
import '../style/card.css';

export default function Card({ cover, title }) {
  return (
    <>
      <div className='card_logement'>
        <link to='/'></link>
        <img src={cover} alt='logement' className='image_card' />
        <p className='location-title'>{title}</p>
      </div>
    </>
  );
}
