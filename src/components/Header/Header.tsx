import Navbar from "./Navbar";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "src/assets/images/logo.svg";
import { cartSelectors } from "src/app/cart/cart.slice";
import { Badge, styled } from "@mui/material";
import { useAppSelector } from "src/app/hooks";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: 5,
    top: 30,
    padding: "0 4px",
    backgroundColor: "black",
    color: "white",
  },
}));

const Header = () => {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef<HTMLHeadElement>(null);
  const handleScroll = (elTopOffset: number, elHeight: number) => {
    const root = document.documentElement;
    if (window.scrollY > elTopOffset + elHeight + 50) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
    root.style.setProperty("--header-offset", elHeight + "px");
  };

  useEffect(() => {
    const header = headerRef.current?.getBoundingClientRect();
    const handleScrollEvent = () => {
      header && handleScroll(header.top, header.height);
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  const { selectTotalQuantity } = cartSelectors;
  const totalQuantity = useAppSelector(selectTotalQuantity);

  return (
    <header
      className={`w-full flex items-center py-2 px-16 flex-wrap justify-between bg-body-clr tablet:px-2 ${
        sticky.isSticky
          ? "fixed top-0 transition-transform duration-500 shadow-md z-50 animate-smoothScroll"
          : "relative"
      }`}
      ref={headerRef}
    >
      <Link
        className="flex hover:scale-105 transition-transform outline-none focus:scale-105 "
        to={"/"}
      >
        <img src={logo} alt="logo" className="self-center h-12 phone:size-8" />
        <div>
          <h1 className="font-header font-semibold desktop:hidden">
            CoffeeShop
          </h1>
          <div className="desktop:hidden">Fresh coffee online</div>
        </div>
      </Link>
      <Navbar />
      <Link
        to={"/cart"}
        className="transition-transform duration-300 hover:-translate-y-1"
      >
        <StyledBadge badgeContent={totalQuantity}>
          <ShoppingBagOutlinedIcon fontSize="large" />
        </StyledBadge>
      </Link>
    </header>
  );
};

export default Header;
