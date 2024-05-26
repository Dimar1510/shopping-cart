import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import '../styles/Header.css'
import { useCart } from "../context/CartContext";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.svg'

function Header() {

    const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
    const headerRef = useRef(null);
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleScroll = (elTopOffset, elHeight) => {
      const root =  document.documentElement
      if (window.scrollY > (elTopOffset + elHeight)) {
        setSticky({ isSticky: true, offset: elHeight });
      } else {
        setSticky({ isSticky: false, offset: 0 });
      }
      root.style.setProperty('--header-offset', elHeight + 'px')
    };



    useEffect(() => {
      const header = headerRef.current.getBoundingClientRect();
      
      const handleScrollEvent = () => {
        handleScroll(header.top, header.height)
      }

      const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };
  
      window.addEventListener('scroll', handleScrollEvent);
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('scroll', handleScrollEvent);
        window.removeEventListener('resize', handleResize);
      };
    }, [windowSize]);

    const {totalQuantity} = useCart()

    return (
        <header 
            className={`header${sticky.isSticky ? ' sticky' : ''}`} 
            ref={headerRef}
        >
            <Link className="logo" to={'/'}>
              <img src={logo} alt="logo" className="logo-img" />
              <h1 className="logo-title">CoffeeShop</h1>
              <div className="logo-text">Fresh coffee online</div>
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