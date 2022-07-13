import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import footerLogo from '../../Assets/trans.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faComputerMouse, faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from "react-router-hash-link";
import resume from '../../Assets/conrad-hunter-resume.pdf';

const Footer = () => {
    return (
        <footer>
            <div id="links__container">
                <h6 id="footer__link--heading">Links</h6>
                <ul id='footer__link--list'>
                    <li>
                        <Link className='footer__link' to='/about'>
                            About
                        </Link>
                    </li>
                    <li>
                        <HashLink className='footer__link' to='/#projects-overview'>
                            Projects
                        </HashLink>
                    </li>
                    <li>
                        <Link className='footer__link' to='/blog'>
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link className='footer__link' to='/contact'>
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
                    <a target='_blank' href="https://github.com/conradhunter">
                        <FontAwesomeIcon className="footer__icon" icon={faGithub} />
                    </a>
                    <a target='_blank' href="https://www.linkedin.com/in/conrad-hunter-906a57226/">
                        <FontAwesomeIcon className="footer__icon" icon={faLinkedin} />
                    </a>
                    <a href="mailto:conrad@conradhunterdev.com">
                        <FontAwesomeIcon className="footer__icon" icon={faEnvelope} />
                    </a>
                    <a target="_blank" href="https://twitter.com/ConradHunter10">
                        <FontAwesomeIcon className="footer__icon" icon={faTwitter} />
                    </a>
                    <a target="_blank" href={resume}>
                        <FontAwesomeIcon className="footer__icon" icon={faFilePdf} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
