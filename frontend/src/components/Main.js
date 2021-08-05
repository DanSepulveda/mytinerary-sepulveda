import Card from './Card'
import Carrousel from './Carrousel'
import CallToAction from './CallToAction'
import Background from './Background'


const Main = () =>{
    return (
        <main>
            {/* <section className="info" style={{
                backgroundImage: "url('/assets/sakura.png')"
            }}>
                <h1>Acá irá alguna info</h1>
            </section> */}
            <Background />
            <section className="carrousel">
                {/* <Carrousel /> */}
            </section>
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

            {/* <h1>Cities</h1>
            {countries.map((country)=>(
                <Card img={country.img} country={country.country} city={country.city} alt={country.alt} key={country.img}/>
            ))} */}