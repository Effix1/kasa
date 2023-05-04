import { useLoaderData } from "react-router-dom"

export default function Logement () {
    const logements = useLoaderData()
    
    console.log(logements)
    return <h1>logement</h1>
}