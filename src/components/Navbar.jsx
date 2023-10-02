import React, { useState } from "react";
import { navLinks } from "../constants";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <nav className="bg-white font-bold font-mono text-lg px-10 sm:px-16 py-3 fixed w-full top-0 z-50">
      <div className="flex justify-between items-center">
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="flex items-center gap-x-[10px]"
        >
          <p className="text-xl">{`${"<Monish>"}`}</p>
        </Link>
        <ul className=" gap-x-[20px] hidden sm:flex">
          {navLinks?.map(link => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="bg-primary right items-center sm:hidden relative">
          <img
            src={toggle ? menu : close}
            alt="menu"
            className="w-[20px] h-[20px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          {!toggle && (
            <ul className="absolute right-0 border px-4 left z-50 bg-white top-6">
              {navLinks?.map(link => (
                <li key={link.id} className="py-0.5">
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
