import Banner from '../components/Banner';
import '../style/About.css';
import image_ban from '../assets/montagne.svg';
import imageBanMobil from '../assets/falaisemobil.svg';
import CardSlide from '../components/CardSlide';

export default function About() {
  const aboutContent = [
    {
      text: 'Fiabilité',
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
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
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
        otherClass='about_banner'
        imgClass='mountain'
      />
      <div className='about_content about_content_mobil_style '>
        {aboutContent.map((content) => {
          return (
            <CardSlide text={content.text}>
              <p>{content.content}</p>
            </CardSlide>
          );
        })}
      </div>
    </>
  );
}
