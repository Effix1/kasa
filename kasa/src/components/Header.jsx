import  '../style/Header.css'
import logo from '../assets/logo_kasa.svg'
import { NavLink } from 'react-router-dom'
export default function Header(){
    return (
        <header>
            <img src= {logo} alt='logo'/>
            <nav>
                <ul>
                    <li className='li_acceuil'><NavLink to='/' className={'style_link'} >Accueil</NavLink></li>
                    
                    <li className='li_about'><NavLink to='/a-propos' className={'style_link'}>À propos</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}