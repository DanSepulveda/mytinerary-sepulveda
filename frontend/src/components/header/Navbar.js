import '../../styles/navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className="link-container">
                <NavLink exact to='/'>Home</NavLink>
                <NavLink to='/cities'>Cities</NavLink>
            </div>
            <div className="avatar-container">
                <img src="/assets/avatar.png" alt='Avatar Icon' />
            </div>
        </nav>
    )
}
export default Navbar