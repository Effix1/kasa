import '../style/banner.css'
import image_ban from '../assets/img_falaise.png'
// afficher l'image
export default function Banner (){
    return <>
    <div className='content_banner'>
        <img src= {image_ban} alt='falaise' className='img_ban'/>
        <p className='banner_text'>Chez vous, partout et ailleurs</p>
    </div>
    
    </>
}
//<p className='banner_text'>Chez vous, partout et ailleurs</p>

