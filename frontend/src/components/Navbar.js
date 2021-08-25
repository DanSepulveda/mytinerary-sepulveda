import "../styles/navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false)

  let loginBox = open ? <div className="login-box"><Link to="/signup">Sign Up</Link><Link to="/login">Log In</Link></div> : null

  return (
    <nav>
      <div className="link-container">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/cities">Cities</NavLink>
      </div>
      <div className="avatar-container">
        <img src="/assets/avatar.png" alt="Avatar Icon" onClick={() => setOpen(!open)} />
        {loginBox}
      </div>
    </nav>
  );
};
export default Navbar;
