import axios from 'axios'
import { useEffect, useState } from "react"
import Navbar from '../components/header/Navbar'
import Itinerary from "../components/main/Itinerary"
import Footer from "../components/Footer"
import {messageOne, msgNoExist} from '../components/Message'
import { Link } from 'react-router-dom'

const City = (props) =>{
    const [city, setCity] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:4000/api/city/${props.match.params.id}`)
        .then(res=>{
            if(res.data.success && res.data.response!=null){
                setCity(res.data.response)
            }else if(res.data.response==null){
                throw new Error("City doesn't exist")
            }else{
                throw new Error('BE-DB Problem')
            }
        })
        .catch((err)=>{
            props.history.push('/cities')
            if(err.message.includes('Request failed')){
                messageOne('FE-BE Problem')
            }else if(err.message.includes('City')){
                msgNoExist(err.message)
            }else{
                messageOne(err.message)
            }
        })
    }, [])

    return(
        <div className="hola">
            <Navbar />
            <div style={{minHeight: '80vh'}}>
                <div style={{backgroundImage: `url('${city.src}')`, width: '100%', minHeight: '80vh', position: 'absolute', top: '0', left: '0', zIndex: '-1', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <h1 style={{fontSize: '15vh', color: 'white'}}>{city.name}</h1>
                </div>
            </div>
            <div style={{textAlign: 'center'}}>
                <Link to='/cities' className="come-back">Back to Cities</Link>
            </div>
            <Itinerary />
            <Footer />
        </div>
    )
}

export default City