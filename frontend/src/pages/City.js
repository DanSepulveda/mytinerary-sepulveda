import { useEffect, useState } from "react"
import axios from 'axios'
import Navbar from '../components/header/Navbar'
import Footer from "../components/Footer"
import Itinerary from "../components/main/Itinerary"

const City = (props) =>{
    console.log(props.match.params.id)
    const [city, setCity] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:4000/api/city/${props.match.params.id}`)
        .then(res=>setCity(res.data.response))
        {console.log('soy el use effect')}
    }, [])

    return(
        <>
            <Navbar />
            <div style={{backgroundImage: `url('${city.src}')`, width: '100%', height: '80vh', position: 'absolute', top: '0', left: '0', zIndex: '-1', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h1 style={{fontSize: '15vh', color: 'white'}}>{city.name}</h1>
            </div>
            {console.log('me monté')}
            <Itinerary />
            
            {/* <Footer /> */}
        </>
    )
}

export default City