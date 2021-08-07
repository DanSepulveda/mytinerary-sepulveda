import Background from './Background'
const Hero = () => {
    return (
        <div className="hero">
            <Background />
            <img src='/assets/3.png' alt='Mytinerary Icon'/>
            <h1><span className="white">My</span><span className="red">Tinerary</span></h1>
            <h3>FIND YOUR PERFECT TRIP, designed by insiders <br />who know and love their cities!</h3>
        </div>
    )
}
export default Hero