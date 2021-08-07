// import Card from '/Card'
import Example from './Carousel'
import CallToAction from './CallToAction'
import Info from './Info'

const Main = () =>{
    return (
        <main>
            <Info />
            <CallToAction />
            <Example />
        </main>
    )
}
export default Main

// let countries = [
//     {img: 'auckland.jpg', country: 'Australia', city: 'Auckland', alt: 'Auckland'},
//     {img: 'paris.jpg', country: 'France', city: 'Paris', alt: 'Paris'},
//     {img: 'rome.jpg', country: 'Italy', city: 'Rome', alt: 'Rome'},
//     {img: 'tokyo.jpg', country: 'Japan', city: 'Tokyo', alt: 'Tokyo'}        
// ]

            // <h1>Cities</h1>
            // {countries.map((country)=>(
            //     <Card img={country.img} country={country.country} city={country.city} alt={country.alt} key={country.img}/>
            // ))} 