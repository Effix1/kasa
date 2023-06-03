import { useLoaderData } from 'react-router-dom';
import '../style/Logement.css';
import CardSlide from '../components/CardSlide';
import Tag from '../components/Tag';
import Rating from '../components/Rating';
import ProfilThumbnail from '../components/ProfilThumbnail';
import SlideShow from '../components/Slideshow';

export default function Logement() {
  const logement = useLoaderData();
  const equipments = logement.equipments;
  const host = logement.host;
  const [firstName, lastName] = host.name.split(' ');

  return (
    <>
      <div className='content_logement'>
        <div className='content_img'>
          <SlideShow images={logement.pictures} />
        </div>
        <div className='content_data'>
          <div className='logement_location_rating'>
            <div className='logement_location'>
              <h1 className='logement_header_title'>{logement.title}</h1>
              <p className='logement_header_location'>{logement.location}</p>
            </div>

            <ProfilThumbnail
              browserClass='thumbnail'
              firstWord={firstName}
              secondWord={lastName}
              image={host.picture}
            />

            <div className='contentTag'>
              {logement.tags.map((tag) => {
                return <Tag target={tag} />;
              })}
            </div>
            <Rating target={logement.rating} />
          </div>

          <div className='logement_content_cardslide'>
            <CardSlide text={'Description'} className={'small'}>
              <p>{logement.description}</p>
            </CardSlide>

            <CardSlide text={'Équipements'} className={'small'}>
              {equipments.map((equipment) => {
                return <p>{equipment}</p>;
              })}
            </CardSlide>
          </div>
        </div>
      </div>
    </>
  );
}
