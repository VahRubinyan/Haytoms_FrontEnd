import { headerConfig } from "../../config";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [lang, setLang] = useState("en");
  return (
    <ul className="header-inner-navbar">
      {headerConfig.map((navLink) => {
        return (
          <li key={navLink.id}>
            {navLink.name[lang]}
            <ul>
              {navLink.genres.map((genre) => {
                return (
                  <li key={genre.id}>
                    <Link to={genre.link}>{genre[lang]}</Link>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
