import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import '../styles/Header.css'
import { useCart } from "../context/CartContext";

function Header() {
    const {totalQuantity} = useCart()
    return (
        <header>
            <h1 className="logo">CoffeShop</h1>
            <Navbar/>
            <NavLink to={'/cart'} className='nav_link'>
                <ShoppingCartOutlinedIcon fontSize="large"/>
                <div className="cart-badge">
                    {totalQuantity()}
                </div>
            </NavLink>
        </header>  
    );
}

export default Header;