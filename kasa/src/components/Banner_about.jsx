import '../style/banner.css'
import image_ban from '../assets/montagne.png'
// afficher l'image
export default function Banner (){
    return <>
    <div className='content_banner'>
        <img src= {image_ban} alt='falaise' className='img_ban'/>
    </div>
    
    </>
}