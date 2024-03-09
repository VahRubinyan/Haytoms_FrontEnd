import { headerConfig } from "../../config";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [lang, setLang] = useState("en");
  return (
    <ul className="header-inner-navbar">
      {headerConfig.map((navLink) => {
        return (
          <Link key={navLink.id} to={navLink.link}>
            {navLink.name[lang]}
            {/* <ul>
              {navLink.genres.map((genre) => {
                return (
                  <Link key={genre.id} to={genre.link}>
                    {genre[lang]}
                  </Link>
                );
              })}
            </ul> */}
          </Link>
        );
      })}
    </ul>
  );
};

export default Navbar;
