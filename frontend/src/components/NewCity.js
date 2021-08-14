import React, { useState } from 'react'
import axios from 'axios'
const NewCity = () =>{
    const[city, setCity] = useState(
        {
            name: null,
            prefecture: null, 
            region: null, 
            description: null, 
            src: null, 
            src2: null, 
            src3: null
        })

    const addNewCity = ()=>{
        axios.post('http://localhost:4000/api/cities', city)
        .then(res=>console.log('Success'))
    }

    const inputHandler = (e) =>{
        setCity({
            ...city,
            [e.target.name]: e.target.value
        })
    }
    console.log(city)

    return (
        <div>
            <label htmlFor="name">City Name</label>
            <input id="name" type="text" name="name" onChange={inputHandler} />
            <label htmlFor="prefecture">Prefecture</label>
            <input id="prefecture" type="text" name="prefecture" onChange={inputHandler}/>
            <label htmlFor="region">Region</label>
            <input htmlFor="region" type="text" name="region" onChange={inputHandler}/>
            <label htmlFor="description">Description</label>
            <input htmlFor="description" type="text" name="description" onChange={inputHandler}/>
            <label htmlFor="src">Image 1</label>
            <input id="src" type="text" name="src" onChange={inputHandler}/>
            <label htmlFor="src2">Image 2</label>
            <input id="src2" type="text" name="src2" onChange={inputHandler}/>
            <label htmlFor="src3">Image 3</label>
            <input htmlFor="src3" type="text" name="src3" onChange={inputHandler}/>
            <button className="post" onClick={addNewCity}>POST</button>
        </div>
    )
}
export default NewCity