import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import '../styles/Header.css'
import { useCart } from "../context/CartContext";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Header() {

    const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
    const headerRef = useRef(null);
  
    const handleScroll = (elTopOffset, elHeight) => {
      if (window.scrollY > (elTopOffset + elHeight)) {
        setSticky({ isSticky: true, offset: elHeight });
      } else {
        setSticky({ isSticky: false, offset: 0 });
      }
    };

    useEffect(() => {
      const header = headerRef.current.getBoundingClientRect();
      const handleScrollEvent = () => {
        handleScroll(header.top, header.height)
      }
  
      window.addEventListener('scroll', handleScrollEvent);
  
      return () => {
        window.removeEventListener('scroll', handleScrollEvent);
      };
    }, []);

    const {totalQuantity} = useCart()
    return (
        <header 
            className={`header${sticky.isSticky ? ' sticky' : ''}`} 
            ref={headerRef}
        >
            <Link className="logo" to={'/'}>
              <h1 >CoffeeShop</h1>
            </Link>
            <Navbar/>
            <NavLink to={'/cart'} className='nav_link cart-icon'>
                <ShoppingBagOutlinedIcon  fontSize="large"/>
                {totalQuantity() > 0 && 
                    <div className="cart-badge">
                        {totalQuantity()}
                    </div>
                }
            </NavLink>
        </header>  
    );
}

export default Header;