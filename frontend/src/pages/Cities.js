import React, { useEffect, useState } from "react"
import Navbar from '../components/header/Navbar'
import Cardcity from '../components/main/Cardcity'

// export default class Cities extends React.Component{


//     componentDidMount(){
//         fetch('http://localhost:4000/prueba/endpoint')
//         .then(response=>response.json())
//         .then(json=>useState({cities: json}))
//     }
//     render (){
//         return (
//             <>
//                 <Navbar />
                
//                 <h1>Esta será la página de Cities</h1>
//             </>
//         )
//     }
// }

const Cities = () =>{
    const [cities, setCities] = useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/prueba/endpoint')
        .then(response=>response.json())
        .then(data=>setCities(data.respuesta))
    }, [])
    
    let columns = [1,2,3]
    return (
        <>
            <Navbar />
            <h1>Esta será la página de cities</h1>
            <input type="text" style={{width: '50%'}} placeholder='Choose your destination' className="searcher"/>
            <div className="rejilla">
                {cities.map((city, index)=>{
                    return (
                        <Cardcity city={city} key={index} index={index}/>
                    )
                })}
            </div>
        </>
    )
}

export default Cities