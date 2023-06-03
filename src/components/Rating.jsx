import starFilled from '../assets/satr_filled.svg';
import starEmpty from '../assets/star_empty.svg';
import '../style/Rating.css';

export default function Rating({ target }) {
  const rating = target;

  const starCount = 5;
  const getStarImage = (index) => {
    if (index <= rating) {
      return starFilled;
    }
    return starEmpty;
  };

  return (
    <div className='rating_content'>
      {[...Array(starCount)].map((_, index) => (
        <img src={getStarImage(index + 1)} alt='star' key={index} />
      ))}
    </div>
  );
}
