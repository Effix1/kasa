import { useLoaderData } from 'react-router-dom';

import '../style/ProfilThumbnail.css';

export default function ProfilThumbnail({ browserClass }) {
  const logement = useLoaderData();
  const host = logement.host;
  const [firstName, lastName] = host.name.split(' ');

  return (
    <>
      <div className={browserClass}>
        <div className='thumbnailContent'>
          <div className='thumbnailName'>
            <p className='thumbnailParagraph'>
              {firstName}
              <br />
              {lastName}
            </p>
          </div>

          <img src={host.picture} className='thumbnailImg' />
        </div>
      </div>
    </>
  );
}
