import React, {useState} from 'react'


function Card({img, alt, country, city}){
    const [clases, setclases] = useState(['View More', 'noDisplay'])

    const changeclases = () =>{
        clases[0]=='View More' ? setclases(['View Less', 'display']) : setclases(['View More','noDisplay'])
    }

    return(
        <div className="card">
            <div className="cardImage">
                <img src={`/assets/${img}`} alt={alt}/>
            </div>
            <h2>{country}</h2>
            <button onClick={changeclases}>{clases[0]}</button>
            <h3 className={clases[1]}>{city}</h3>
        </div>
    )
}
export default Card
