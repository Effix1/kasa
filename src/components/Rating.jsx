import starFilled from '../assets/starFilled.png';
import starEmpty from '../assets/starEmpty.png';

export default function Rating({ tar }) {
  const rating = tar;

  const starCount = 5;
  const getStarImage = (index) => {
    if (index <= rating) {
      return starFilled;
    }
    return starEmpty;
  };

  return (
    <div className='star-content'>
      {[...Array(starCount)].map((_, index) => (
        <img src={getStarImage(index + 1)} alt='star' key={index} />
      ))}
    </div>
  );
}
