import axios from 'axios'
import { useEffect, useState } from "react"
import Navbar from '../components/header/Navbar'
import Itinerary from "../components/main/Itinerary"
import Footer from "../components/Footer"
import {messageOne, msgNoExist} from '../components/Message'
import { Link } from 'react-router-dom'

const City = (props) =>{
    const [city, setCity] = useState({})

    window.scrollTo(0, 0)
    useEffect(()=>{
        axios.get(`http://localhost:4000/api/city/${props.match.params.id}`)
        .then(res=>{
            if(res.data.success && res.data.response!=null){
                setCity(res.data.response)
            }else if(res.data.response==null){
                throw new Error("City doesn't exist")
            }else{
                throw new Error()
            }
        })
        .catch((err)=>{
            props.history.push('/cities')
            if(err.message.includes('City')){
                msgNoExist()
            }else{
                messageOne()
            }
        })
    }, [])

    return(
        <div className="cityContainer">
            <Navbar />
            <div style={{minHeight: '80vh'}}>
                <div style={{backgroundImage: `url('${city.src}')`, width: '100%', minHeight: '80vh', position: 'absolute', top: '0', left: '0', zIndex: '-1', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <h1 style={{fontSize: '15vh', color: 'white'}}>{city.name}</h1>
                </div>
            </div>
            <Itinerary />
            <div style={{minHeight: '30vh', marginTop: '5vh', display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
                <Link to='/cities' className="come-back">Back to Cities</Link>
            </div>
            <Footer />
        </div>
    )
}

export default City