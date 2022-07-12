import React from "react";
import "./nav.css";
import logo from "../../Assets/trans.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  return (
    <nav>
      <div id="top__nav--container">
        <figure id="logo__wrapper">
          <Link to="/">
            <img id="nav__logo" src={logo} alt="" />
          </Link>
        </figure>
        <div id="nav__links--container">
          <ul id="nav__bar--links">
            <li>
              <Link className="nav__bar--link" to="/about">
                About
              </Link>
            </li>
            <li>
              <HashLink className="nav__bar--link" to="/#projects-overview">
                Projects
              </HashLink>
            </li>
            <li>
              <Link className="nav__bar--link" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="nav__bar--link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
