import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import Card from '../components/Card';
import image_ban from '../assets/img_falaise.png';

export default function Homepage() {
  const logements = useLoaderData();
  return (
    <>
      <Banner image={image_ban} text='Chez vous, partout et ailleurs' />

      <div className='gallery'>
        {logements.map((logement) => {
          const idLogement = logement.id;
          return (
            <>
              <Link to={`/logement/${idLogement}`}>
                <Card logement={logement} />
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}
