import axios from 'axios'
import React, { useEffect, useState } from "react"
import Navbar from '../components/header/Navbar'
import Cardcity from '../components/main/Cardcity'
import Footer from '../components/Footer'

const Cities = (props) =>{
    const [data, setData] = useState({allCities: [], filteredCities: []})
    const [search, setSearch] = useState('')

    useEffect(()=>{
        axios.get('http://localhost:4000/api/cities')
        .then(res=>setData({allCities: res.data.response, filteredCities: res.data.response}))
        .catch((err)=>props.history.push('/'))
    }, [])

    useEffect(()=>{
        setData({
            allCities: [...data.allCities],
            filteredCities: data.allCities.filter((city)=> city.name.toLowerCase().startsWith(search.trim().toLowerCase()))
        })
    }, [search])

    const handlerCity = (e)=>{
        setSearch(e.target.value)  
    }

    // let result = data.filteredCities.length == 0 
    // ? <div className="nocity"><div style={{backgroundImage: '/assets/sad-panda.png'}}></div><div>lalalallal</div></div>
    // : data.filteredCities.map((city, index)=><Cardcity city={city} key={index} index={index}/>)

    let result = data.filteredCities.map((city, index)=><Cardcity city={city} key={index} index={index}/>)
    // let nocity = <div className="nocity"><img src='/assets/sad-panda.png'/><div>lalalallal</div></div>

    return (
        <>
            <header className="cities">
                <Navbar />
            </header>
            <div className="cityHero" style={{backgroundImage: "url('/assets/banner/6.png')"}}>
                <h1>Esta será la página de cities</h1>
            </div>
            <input type="text" style={{width: '50%', zIndex: '2', margin: '5vh auto'}} placeholder='Choose your destination' className="searcher" onChange={handlerCity}/>
            {data.filteredCities.length == 0 && <div className="nocity"><div style={{backgroundImage: "url('/assets/sad-panda.png')", height: '30vh'}}></div><div className="message"><h2>NO MATCH FOUND</h2></div></div>}
            <div className="rejilla">
                {result}
            </div>
            <Footer />
        </>
    )
}

export default Cities