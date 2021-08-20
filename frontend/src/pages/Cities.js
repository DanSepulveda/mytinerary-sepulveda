import '../styles/cities.css'
import React, { useEffect, useState } from "react"

import Navbar from '../components/header/Navbar'
import Cardcity from '../components/main/Cardcity'
import Footer from '../components/Footer'
import Nocity from '../components/main/Nocity'
import {messageOne} from '../components/Message'

import {connect} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'

const Cities = (props) =>{
    const [loader, setLoader] = useState(true)

    useEffect(()=>{
        window.scrollTo(0, 0)
        props.getCities()
        setLoader(false)
    }, [])

    const handlerCity = (e)=>{ 
        props.getFiltered(e.target.value) 
    }

    if(loader){
        return (
            <div className="loader">
                <img src='/assets/loader.gif'/>
            </div>
        )
    }
    
    let result = props.cities.map((city, index)=><Cardcity city={city} key={index} index={index}/>)
    // let message = (data.filteredCities.length==0 && data.state=='ok') &&  <Nocity />
    
    return (
        <>
            <header className="cities">
                <Navbar />
            </header>
            <div className="cityHero" style={{backgroundImage: "url('/assets/banner/6.png')"}}>
                <h1>Find your next<br />travel destination</h1>
            </div>
            <input type="text" placeholder='Choose your destination' className="searcher" onChange={handlerCity}/>
            {/* {message} */}
            <div className="rejilla">
                {result}
            </div>            
            <Footer />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cities: state.cities.filteredCities
    }
}
const mapDispatchToProps = {
    getCities: citiesActions.getList,
    getFiltered: citiesActions.getFilteredList
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)