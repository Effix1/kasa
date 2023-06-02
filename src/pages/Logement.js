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
          <div className='logement-location-rating'>
            <div className='logement-location'>
              <h1 className='logement-header-title'>{logement.title}</h1>
              <p className='logement-header-location'>{logement.location}</p>
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

          <div className='logement-content-cardslide'>
            <CardSlide text={'Description'} className={'small'}>
              <p className='cardslide-content-paragraph'>
                {logement.description}
              </p>
            </CardSlide>

            <CardSlide
              text={'Équipements'}
              className={'small logement-equipments'}
            >
              {equipments.map((equipment) => {
                return (
                  <p className='cardslide-content-paragraph'>{equipment}</p>
                );
              })}
            </CardSlide>
          </div>
        </div>
      </div>
    </>
  );
}
