import React from "react";
import { Link } from "react-router-dom";

const HeroLink = ({ link, children }) => {
  return (
    <Link
      to={link}
      className="text-center border border-solid border-body-clr p-4 backdrop-blur-md rounded-lg transition-all duration-300 hover:bg-body-clr hover:text-text-clr hover:shadow-[0_0_20px_2px] hover:shadow-body-clr uppercase font-body"
    >
      {children}
    </Link>
  );
};

export default HeroLink;
