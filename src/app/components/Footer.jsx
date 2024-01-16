import Link from "next/link";
import React from "react";
import { BsArrowUpSquareFill } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>2024</span>
        <p className="text-slate-600">
          <Link href='/'><BsArrowUpSquareFill  className="text-white text-4xl  hover:text-primary-600"/></Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
