import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav>
            <div>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink to='/cities'>Cities</NavLink>
            </div>
            <div>
                <img src="/assets/avatar.png" />
            </div>
        </nav>
    )
}
export default Navbar