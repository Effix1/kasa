
import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import Card from '../components/Card';





export default function Homepage() {
    const logements = useLoaderData()
   
    return (
        <>
        <div className='corp'>
        <Banner/>
        
        <div className='gallery'>                                   
           {logements.map((logement)=>{
            
            return <Card logement={logement}/>
            
           })} 
        </div>
        </div>
       
      
        </>
        )
    }

    //   <Gallery/>    //
    
    
    