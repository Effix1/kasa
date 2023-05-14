import '../style/banner.css';

// afficher l'image
export default function Banner({ image, text }) {
  let paragraph;
  if (text) {
    paragraph = <p className='banner_text'>{text}</p>;
  }
  return (
    <>
      <div className='content_banner'>
        <img src={image} alt='' className='img_ban' />
        {paragraph}
      </div>
    </>
  );
}
//<p className='banner_text'>Chez vous, partout et ailleurs</p>
