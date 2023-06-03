import '../style/ProfilThumbnail.css';

export default function ProfilThumbnail({
  browserClass,
  firstWord,
  secondWord,
  image,
}) {
  return (
    <>
      <div className={browserClass}>
        <div className='thumbnail_content'>
          <p className='thumbnail_paragraph'>
            {firstWord}
            <br />
            {secondWord}
          </p>
          <img
            src={image}
            className='thumbnail_img'
            alt={`${firstWord} ${secondWord}`}
          />
        </div>
      </div>
    </>
  );
}
