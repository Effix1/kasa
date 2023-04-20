import  '../style/Header.css'
import logo from '../assets/logo_kasa.svg'
import { NavLink } from 'react-router-dom'
export default function Header(){
    return (
        <header>
            <img src= {logo}/>
            <nav>
                <ul>
                    <li><NavLink to='/' >Accueil</NavLink></li>
                    
                    <li><NavLink to='/a-propos'>à propos</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}