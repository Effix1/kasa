import '../style/Tag.css';

export default function Tag({ tar }) {
  const tags = tar;
  return (
    <>
      {tags.map((tag) => {
        return <p className='tag'>{tag}</p>;
      })}
    </>
  );
}
