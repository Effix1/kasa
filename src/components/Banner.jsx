import '../style/banner.css';

// afficher l'image
export default function Banner({ image, text, otherClass, imgClass }) {
  let paragraph;
  if (text) {
    paragraph = <p className='banner_text'>{text}</p>;
  }
  return (
    <>
      <div className={`content_banner ${otherClass}`}>
        <img src={image} alt='' className={`img_ban ${imgClass}`} />
        {paragraph}
      </div>
    </>
  );
}
