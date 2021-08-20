import "../../styles/hero.css";
import Background from "./Background";
const Hero = (props) => {
  return (
    <div className="hero">
      <Background />
      <img className="logo" src="/assets/logo.png" alt="Mytinerary Icon" />
      <h1>
        <span className="white">My</span>
        <span className="red">Tinerary</span>
      </h1>
      <h3>
        FIND YOUR PERFECT TRIP, designed by insiders <br />
        who know and love their cities!
      </h3>
      <a href="#info">
        <img className="arrow" src="/assets/down.png" alt="Down arrow" />
      </a>
    </div>
  );
};
export default Hero;
