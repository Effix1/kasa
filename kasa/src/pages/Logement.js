import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner'


export default function Logement() {
    const logements = useLoaderData()
    console.log(logements)
    
    return (
        <>
        <Banner/>
        <h1>Logement</h1>
        </>
        )
    }
    
    
    