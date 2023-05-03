import '../style/card.css'

export default function Card ({logement}) {
    return <>
    <div className="card_logement">
        <link to="/"></link>
        <img src={logement.cover} alt="logement" className='image_card'/>
        <p className='location_title'>{logement.title}</p> 
    </div>
    
    </> 
}
