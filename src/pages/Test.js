import Banner from '../components/Banner';
import image_ban from '../assets/img_falaise.png';
import Slideshow from '../components/Slideshow';

export default function Test() {
  return (
    <>
      <Banner image={image_ban} text='Chez vous, partout et ailleurs' />
      <Slideshow />
    </>
  );
}
