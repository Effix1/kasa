import { useLoaderData } from 'react-router-dom';
import '../style/Logement.css';
import CardSlide from '../components/CardSlide';
import star from '../assets/star.png';
import Tag from '../components/Tag';
import Rating from '../components/Rating';
import ProfilThumbnail from '../components/ProfilThumbnail';

export default function Logement() {
  const logement = useLoaderData();
  const equipments = logement.equipments;

  return (
    <>
      <div className='content_logement'>
        <div className='content_img'>
          <img src={logement.cover} alt='' />
        </div>

        <div className='content_data'>
          <div className='content_location '>
            <div>
              <h1>{logement.title}</h1>
              <p>{logement.location}</p>
            </div>
            <div>
              <ProfilThumbnail />
            </div>
          </div>

          <div className='logement-slide-content'>
            <div className='tag-rating'>
              <div className='contentTag'>
                <Tag tar={logement.tags} />
              </div>

              <Rating />
              <div className='star-content'>
                <img src={star} alt=' star' />
                <img src={star} alt=' star' />
                <img src={star} alt=' star' />
                <img src={star} alt=' star' />
                <img src={star} alt=' star' />
              </div>
            </div>

            <div className='content_loca-description content'>
              <div className='logement-content-cardslide'>
                <div className='slider'>
                  <CardSlide text={'Description'}>
                    <p>{logement.description}</p>
                  </CardSlide>
                </div>
                <div className='slider'>
                  <CardSlide text={'Coucou'}>
                    {equipments.map((equipment) => {
                      return <p>{equipment}</p>;
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
