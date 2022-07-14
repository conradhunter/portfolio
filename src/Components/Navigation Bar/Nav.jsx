import React from "react";
import "./nav.css";
import logo from "../../Assets/trans.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import NavModal from "./NavModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {

  const navModal = document.getElementById('nav__modal');

  function displayNavModal() {
      navModal.style.display = 'block';
  }



  return (
    <nav>
      <NavModal />
      <div id="top__nav--container">
        <button onClick={displayNavModal} className="hamburger__button" id="hamburger__button">
          <FontAwesomeIcon icon ={faBars} />
        </button>
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
