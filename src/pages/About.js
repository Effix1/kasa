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
      <CardSlide
        text={'Respect'}
        textContent={
          'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        }
      />
      <CardSlide
        text={'Service'}
        textContent={
          "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        }
      />
      <CardSlide
        text={'Sécurité'}
        textContent={
          "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
      />
    </>
  );
}
/**/
