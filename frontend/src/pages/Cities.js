import axios from 'axios'
import React, { useEffect, useState } from "react"
import Navbar from '../components/header/Navbar'
import Cardcity from '../components/main/Cardcity'
import Footer from '../components/Footer'
import Nocity from '../components/main/Nocity'
import {messageOne} from '../components/Message'


const Cities = (props) =>{
    const [data, setData] = useState({allCities: [], filteredCities: [], state: 'bad'})
    const [search, setSearch] = useState('')
    const [loader, setLoader] = useState(true)

    useEffect(()=>{
        axios.get('http://localhost:4000/api/cities')
        .then(res=>{
            if(res.data.success){
                if(res.data.response.length>0){
                    setData({allCities: res.data.response, filteredCities: res.data.response, state: 'ok'})
                }else{
                    throw new Error("There isn't cities to show.")
                }
            }else{
                throw new Error('BE-DB Problem')
            }
        })
        .catch((err)=>{
            err.message = err.message == 'Network Error' && 'FE-BE Problem'
            messageOne(err.message)
        })
        .finally(()=>setLoader(false))
    }, [])

    useEffect(()=>{
        setData({
            allCities: [...data.allCities],
            filteredCities: data.allCities.filter((city)=> city.name.toLowerCase().startsWith(search.trim().toLowerCase())),
            state: data.state
        })
    }, [search])

    const handlerCity = (e)=>{
        setSearch(e.target.value)  
    }

    if(loader){
        return (
            <div className="loader">
                <img src='/assets/loader.gif'/>
            </div>
        )
    }
    
    let result = data.filteredCities.map((city, index)=><Cardcity city={city} key={index} index={index}/>)
    let message = (data.filteredCities.length==0 && data.state=='ok') &&  <Nocity />
    
    return (
        <>
            <header className="cities">
                <Navbar />
            </header>
            <div className="cityHero" style={{backgroundImage: "url('/assets/banner/6.png')"}}>
                <h1>Esta será la página de cities</h1>
            </div>
            <input type="text" style={{width: '50%', zIndex: '2', margin: '5vh auto'}} placeholder='Choose your destination' className="searcher" onChange={handlerCity}/>
            {message}
            <div className="rejilla">
                {result}
            </div>
            <Footer />
        </>
    )
}
export default Cities