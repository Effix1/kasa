import Banner from '../components/Banner';
//import AboutPage from '../components/AboutPage';
import image_ban from '../assets/montagne.png';
import CardSlide from '../components/CardSlide';

export default function About() {
  return (
    <>
      <Banner image={image_ban} />

      <CardSlide
        text={'Fiabilité'}
        textContent={
          'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
        }
      />
    </>
  );
}

/*<CardSlide text={'Respect'} textContent={""}/>
      <CardSlide text={'Service'} textContent={""}/>
      <CardSlide text={'Sécurité'} textContent={""}/>*/
