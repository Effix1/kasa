import '../style/Error.css';
import { NavLink } from 'react-router-dom';

export default function Error() {
  return <div className="div_error">
    <h1 className="error_title">404</h1>
    <p className="error_text">Oups! La page que vous demandez n'existe pas.</p>
    <p className='error_link'><NavLink to='/' className={'style_link'}>Retourner sur la page d’accueil</NavLink></p>

  </div>
  ;
}
