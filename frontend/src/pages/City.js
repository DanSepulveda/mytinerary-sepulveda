import axios from 'axios'
import { useEffect, useState } from "react"
import Navbar from '../components/header/Navbar'
import Itinerary from "../components/main/Itinerary"
import Footer from "../components/Footer"

const City = (props) =>{
    const [city, setCity] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:4000/api/city/${props.match.params.id}`)
        .then(res=>setCity(res.data.response))
    }, [])

    return(
        <>
            <Navbar />
            <div style={{backgroundImage: `url('${city.src}')`, width: '100%', height: '80vh', position: 'absolute', top: '0', left: '0', zIndex: '-1', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h1 style={{fontSize: '15vh', color: 'white'}}>{city.name}</h1>
            </div>
            <Itinerary />
            <Footer />
        </>
    )
}

export default City