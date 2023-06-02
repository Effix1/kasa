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
        <div className='thumbnailContent'>
          <p className='thumbnailParagraph'>
            {firstWord}
            <br />
            {secondWord}
          </p>
          <img
            src={image}
            className='thumbnailImg'
            alt={`${firstWord} ${secondWord}`}
          />
        </div>
      </div>
    </>
  );
}
