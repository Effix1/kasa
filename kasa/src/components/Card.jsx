import '../style/card.css'

export default function Card ({logement}) {
    console.log(logement)
    return <>
    <div className="card_logement">
        <img src={logement.cover} alt="logement" className='image_card'/>
        <p className='location_title'>{logement.title}</p> 
    </div>
    
    </> 
}