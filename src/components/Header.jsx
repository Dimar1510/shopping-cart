import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import "../styles/Header.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { selectTotalQuantity } from "../app/cart/cart.slice";
import { useSelector } from "react-redux";

function Header() {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);

  const handleScroll = (elTopOffset, elHeight) => {
    const root = document.documentElement;
    if (window.scrollY > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
    root.style.setProperty("--header-offset", elHeight + "px");
  };

  useEffect(() => {
    const header = headerRef.current.getBoundingClientRect();

    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <header
      className={`header${sticky.isSticky ? " sticky" : ""}`}
      ref={headerRef}
    >
      <Link className="logo" to={"/"}>
        <img src={logo} alt="logo" className="logo-img" />
        <h1 className="logo-title">CoffeeShop</h1>
        <div className="logo-text">Fresh coffee online</div>
      </Link>
      <Navbar />
      <NavLink to={"/cart"} className="nav_link cart-icon">
        <ShoppingBagOutlinedIcon fontSize="large" />
        {totalQuantity > 0 && <div className="cart-badge">{totalQuantity}</div>}
      </NavLink>
    </header>
  );
}

export default Header;
