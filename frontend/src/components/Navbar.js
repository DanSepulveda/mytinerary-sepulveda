import styles from "../styles/navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import userActions from "../redux/actions/usersActions";
import citiesActions from "../redux/actions/citiesActions";

const Navbar = (props) => {
  const [open, setOpen] = useState(false)

  let loginBox = open
    ? <div className={styles.loginBox}>
      {!props.token && <Link to="/signup">Sign Up</Link>}
      {!props.token && <Link to="/login">Log In</Link>}
      {props.token && <span onClick={props.logOut}>Log Out</span>}
    </div >
    : null

  let icon = props.token ? `${props.user.imageUrl}` : "/assets/avatar.png"

  return (
    <nav>
      <div className={styles.linkContainer}>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/cities">Cities</NavLink>
      </div>
      <div className={styles.avatarContainer}>
        {props.token && <span>Welcome, {props.user.firstName}</span>}
        <div className={styles.avatarIcon} style={{ backgroundImage: `url(${icon})` }} onClick={() => setOpen(!open)}>
        </div>
        {loginBox}
      </div>
    </nav>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.users.token,
    user: state.users.user
  }
}
const mapDispatchToProps = {
  logOut: userActions.logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
