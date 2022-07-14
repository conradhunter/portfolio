import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const NavModal = () => {

    const navModal = document.getElementById('nav__modal');

    function closeNavModal() {
        navModal.style.display = 'none';
    }


    return (
        <div id="nav__modal">
            <button onClick={closeNavModal} className='modal__exit' id='modal__exit'>
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <ul className="nav__modal--link-list">
                <li>
                    <Link className='nav__modal--links' to="">About</Link>
                </li>
                <li>
                    <Link className='nav__modal--links' to="">Projects</Link>
                </li>
                <li>
                    <Link className='nav__modal--links' to="">Blog</Link>
                </li>
                <li>
                    <Link className='nav__modal--links' to="">Contact</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavModal;
