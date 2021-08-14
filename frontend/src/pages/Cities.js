import React, { useEffect, useState } from "react"
import Navbar from '../components/header/Navbar'
import Cardcity from '../components/main/Cardcity'
import axios from 'axios'

const Cities = () =>{
    const [cities, setCities] = useState([])
    const [search, setSearch] = useState('')

    useEffect(()=>{
        axios.get('http://localhost:4000/api/cities')
        .then(res=>setCities(res.data.response))
        .catch((err)=>{})
    }, [])

    const handlerCity = (e)=>{
        setSearch(e.target.value)
        
    }
    
    return (
        <>
            <Navbar />
            <h1>Esta será la página de cities</h1>
            <input type="text" style={{width: '50%'}} placeholder='Choose your destination' className="searcher" onChange={handlerCity}/>
            <div className="rejilla">
                {cities.map((city, index)=>{
                    console.log(city)
                    return (
                        city.name.toLowerCase().startsWith(search.trim().toLowerCase())) && 
                        <Cardcity city={city} key={index} index={index}/>
                    
                })}
            </div>
        </>
    )
}

export default Cities