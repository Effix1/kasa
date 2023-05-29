import Banner from '../components/Banner';
import '../style/About.css';
import image_ban from '../assets/montagne.png';
import imageBanMobil from '../assets/falaisemobil.svg';
import CardSlide from '../components/CardSlide';

export default function About() {
  const aboutContent = [
    {
      text: 'fiabilité',
      content:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
      text: 'Respect',
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      text: 'Service',
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      text: 'Sécurité',
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];
  const isMobil = window.innerWidth <= 375;
  return (
    <>
      <Banner
        image={isMobil ? imageBanMobil : image_ban}
        otherClass='about-banner'
        imgClass='mountain'
      />
      <div className='about-content about-content-mobil-style '>
        {aboutContent.map((content) => {
          return (
            <CardSlide className='big' text={content.text}>
              <p>{content.content}</p>
            </CardSlide>
          );
        })}
      </div>
    </>
  );
}
/**/
