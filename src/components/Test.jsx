import { useState } from 'react';

export default function Test({ text }) {
  const [etat, setEtat] = useState(0);
  const testClick = () => {
    setEtat(etat + 1);
  };
  return (
    <div onClick={testClick}>
      {text}
      {etat}
    </div>
  );
}
