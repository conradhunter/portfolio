import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import footerLogo from '../../Assets/trans.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faComputerMouse, faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div id="links__container">
                <h6 id="footer__link--heading">Links</h6>
                <ul id='footer__link--list'>
                    <li>
                        <Link className='footer__link' to=''>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className='footer__link' to=''>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link className='footer__link' to=''>
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link className='footer__link' to=''>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div id="copyright__container">
                <figure id="footer__logo--wrapper">
                    <Link to='/'>
                        <img id='footer__logo' src={footerLogo} alt="" />
                    </Link>
                </figure>
                <p id='copyright__para'>Copyright&copy; Conrad Hunter 2022</p>
                <button id="scroll__button">
                    <FontAwesomeIcon id='scroll__icon' icon={faComputerMouse} />
                </button>
            </div>
            <div id="socials__container">
                <h4 id="footer__socials--heading">Get in touch!</h4>
                <div id="footer__icons--container">
                    <FontAwesomeIcon className="footer__icon" icon={faGithub} />
                    <FontAwesomeIcon className="footer__icon" icon={faLinkedin} />
                    <FontAwesomeIcon className="footer__icon" icon={faEnvelope} />
                    <FontAwesomeIcon className="footer__icon" icon={faTwitter} />
                    <FontAwesomeIcon className="footer__icon" icon={faFilePdf} />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
