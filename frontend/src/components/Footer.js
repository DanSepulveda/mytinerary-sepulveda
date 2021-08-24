import "../styles/footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="sections-container">
        <div className="section section-first">
          <h4>
            Contact
            <br />
            Information
          </h4>
          <p>Please feel free to contact us through ant of our social media.</p>
          <div className="social-container">
            <a rel="noreferrer" href="https://www.whatsapp.com" target="_blank">
              <img
                className="social-icon"
                src="/assets/whatsapp.png"
                alt="Whatsapp Icon"
              />
            </a>
            <a rel="noreferrer" href="https://www.facebook.com" target="_blank">
              <img
                className="social-icon"
                src="/assets/facebook.png"
                alt="Facebook Icon"
              />
            </a>
            <a rel="noreferrer" href="https://www.twitter.com" target="_blank">
              <img
                className="social-icon"
                src="/assets/twitter.png"
                alt="Twitter Icon"
              />
            </a>
            <a
              rel="noreferrer"
              href="https://www.instagram.com"
              target="_blank"
            >
              <img
                className="social-icon"
                src="/assets/instagram.png"
                alt="Instagram Icon"
              />
            </a>
          </div>
        </div>
        <div className="section section-second">
          <h4>
            Navegation
            <br />
            Menu
          </h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <NavLink to={document.title.includes("Cities") ? "#" : "/cities"}>
                Cities
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className="section section-third"
          style={{ backgroundImage: "url('/assets/logo.png')" }}
        ></div>
      </div>
      <div className="after-footer">
        <span>Made by Daniel Sepúlveda | &copy; All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
