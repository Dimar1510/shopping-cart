import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ link, children }: { link: string; children: string }) => {
  return (
    <NavLink
      className={
        "uppercase relative hover:before:size-full hover:before:absolute hover:before:border-b hover:before:border-solid hover:before:border-gray-700 hover:before:-bottom-1 hover:before:origin-left hover:before:animate-slidein hover:before:will-change-transform"
      }
      to={link}
    >
      {children}
    </NavLink>
  );
};

const Navbar = () => {
  return (
    <nav className="p-2 phone:p-0">
      <ul className="flex justify-around gap-12 phone:gap-3">
        <NavItem link={"/"}>Home</NavItem>
        <NavItem link={"/shop"}>Shop</NavItem>
        <NavItem link={"/about"}>About</NavItem>
      </ul>
    </nav>
  );
};

export default Navbar;
