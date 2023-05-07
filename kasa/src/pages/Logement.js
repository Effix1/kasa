import { useLoaderData } from "react-router-dom";
import '../style/Logement.css'

export default function Logement() {
    const logement = useLoaderData();
    console.log(logement)
    return (
        <>
        <div className="content_logement">
            <div className="content_img">
                <img src={logement.cover} alt=""/>
            </div>
        <div className="content_data">
            <div className="content_location content">
                <h1>{logement.title}</h1>
                <p>{logement.location}</p>
            </div>
            <div className="content_loca-description content">
        
                <div className="content_descrition">
                    <nav>
                        <ul className="logement_selection">
                            <li className="list-selection">coucou</li>
                            <li className="list-selection">coucou</li>
                            <li className="list-selection">coucou </li>
                        </ul>
                    </nav>
                    <div>
                        <p className="description-cash">Description</p>
                        <p>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). </p>
                    </div>
                </div>
            </div>
            <div className="content_equipement content">
                équipements
            </div>
        </div>
        
        </div>
        </>
        )
    }
    
    
    