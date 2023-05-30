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

  return (
    <>
      <div className='content_logement'>
        <div className='content_img'>
          <SlideShow images={logement.pictures} />
        </div>
        <div className='content_data'>
          <div className='content_location '>
            <div>
              <h1 className='logement-header-title'>{logement.title}</h1>
              <p className='logement-header-location'>{logement.location}</p>
            </div>
            <ProfilThumbnail browserClass='fullScreen' />
          </div>

          <div className='logement-slide-content'>
            <div className='tag-rating'>
              <div className='contentTag'>
                {logement.tags.map((tag) => {
                  return <Tag target={tag} />;
                })}
              </div>
              {console.log(logement)}
              <Rating tar={logement.rating} />
              <ProfilThumbnail browserClass='mobil' />
            </div>

            <div className='content_loca-description content'>
              <div className='logement-content-cardslide'>
                <div className='slider'>
                  <CardSlide text={'Description'} className={'small'}>
                    <p className='cardslide-content-paragraph'>
                      {logement.description}
                    </p>
                  </CardSlide>
                </div>
                <div className='slider'>
                  <CardSlide text={'Équipements'} className={'small'}>
                    {equipments.map((equipment) => {
                      return (
                        <p className='cardslide-content-paragraph'>
                          {equipment}
                        </p>
                      );
                    })}
                  </CardSlide>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
