import React from "react";
import { Link } from "react-router-dom";

const HeroLink = ({ link, children }: { link: string; children: string }) => {
  return (
    <Link to={link}>
      <div className="font-semibold text-center px-10 py-4 border border-solid border-body-clr backdrop-blur-lg rounded-lg transition-all duration-300 hover:bg-body-clr hover:text-text-clr hover:shadow-[0_0_20px_2px] hover:shadow-body-clr uppercase font-body self-start">
        {children}
      </div>
    </Link>
  );
};

export default HeroLink;
