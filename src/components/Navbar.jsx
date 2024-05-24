import { NavLink } from "react-router-dom";
import "../styles/Navbar.css"
function Navbar() {
    return (  
        <nav className="navbar">
            <ul className="nav_links">
                <NavLink className={'nav_link'} to={'/'}>Home</NavLink>
                <NavLink className={'nav_link'} to={'/shop'}>Shop</NavLink>
                <NavLink className={'nav_link'} to={'/about'}>About</NavLink>
            </ul>

        </nav>
    );
}

export default Navbar;