import React, { useRef, useState } from 'react';
import './nav.css';
import logo from '../../Assets/trans.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const modalRef = useRef(null);

  const toggleModal = () => {
    setShowMenu(!showMenu);
    if (showMenu === true) {
      modalRef.current.style.display = 'none';
    } else if (showMenu === false) {
      modalRef.current.style.display = 'block';
    }
  };

  function closeModal() {
    modalRef.current.style.display = 'none';
  }

  return (
    <nav>
      <div
        onClick={closeModal}
        className='nav__modal'
        id='nav__modal'
        ref={modalRef}
      >
        <ul className='nav__modal--link-list'>
          <li>
            <Link className='nav__modal--links' to='/about'>
              About
            </Link>
          </li>
          <li>
            <HashLink className='nav__modal--links' to='/#projects-overview'>
              Projects
            </HashLink>
          </li>
          <li>
            <Link className='nav__modal--links' to='/blog'>
              Blog
            </Link>
          </li>
          <li>
            <Link className='nav__modal--links' to='/contact'>
              Contact
            </Link>
          </li>
        </ul>
        <button
          onClick={toggleModal}
          className='close__button'
          id='close__button'
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <div id='top__nav--container'>
        <button
          onClick={toggleModal}
          className='toggle__button'
          id='toggle__button'
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <figure id='logo__wrapper'>
          <Link to='/'>
            <img id='nav__logo' src={logo} alt='' />
          </Link>
        </figure>
        <div id='nav__links--container'>
          <ul id='nav__bar--links'>
            <li>
              <Link className='nav__bar--link' to='/about'>
                About
              </Link>
            </li>
            <li>
              <HashLink className='nav__bar--link' to='/#projects-overview'>
                Projects
              </HashLink>
            </li>
            <li>
              <Link className='nav__bar--link' to='/blog'>
                Blog
              </Link>
            </li>
            <li>
              <Link className='nav__bar--link' to='/contact'>
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
