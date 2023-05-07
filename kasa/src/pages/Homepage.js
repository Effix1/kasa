import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import Card from '../components/Card';

export default function Homepage() {
    const logements = useLoaderData()
    console.log(logements)
    return (
        <>
        
        <Banner/>
        
        <div className='gallery'>                                   
           {logements.map((logement)=>{
            const idLogement = logement.id;
            return <>
                <Link to={`/logement/${idLogement}`}><Card logement={logement}/></Link>
                
            </>  
           })} 
        </div>
        
        </>
        )
    }

    
    
    
    