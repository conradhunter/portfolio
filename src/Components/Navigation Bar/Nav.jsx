import React from "react";
import "./nav.css";
import logo from "../../Assets/trans-words.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
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
              <HashLink className="nav__bar--link" to="/#projects__blurb--container">
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
      <div id="aboutMe__info--container">
        <h1 id="about__me--heading">Hi, I'm Conrad Hunter | <span className="hover__text--underline">Frontend Engineer</span></h1>
        <div id="icon__container">
            <a href="">
                <FontAwesomeIcon className="home__icon" icon={faGithub} />
            </a>
            <a href="">
                <FontAwesomeIcon className="home__icon" icon={faLinkedin} />
            </a>
            <a href="">
                <FontAwesomeIcon className="home__icon" icon={faEnvelope} />
            </a>
            <a href="">
                <FontAwesomeIcon className="home__icon" icon={faTwitter} />
            </a>
            <a href="">
                <FontAwesomeIcon className="home__icon" icon={faFilePdf} />
            </a>
        </div>
        <p id="about__me--para">Always Learning 📚 I love travelling ⛰️ I spend my time skiing and coding ⛷️</p>
      </div>
    </nav>
  );
};

export default Nav;
