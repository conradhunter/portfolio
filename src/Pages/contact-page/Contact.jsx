import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./contact.css";
import undrawContact from '../../Assets/undraw-contact.svg';

const Contact = () => {
  return (
    <main id="contact__page">
      <div className="row">
        <div id="contact__content--container">
          <div id="contact__info--container">
            <h1 id="contact__heading">Let's get in touch!</h1>
            <a id="contact__email--link" href="mailto:conrad@conradhunterdev.com">
              conrad@conradhunterdev.com
            </a>
            <ul id="contact__page--link-list">
              <li>
                <a className="contact__page--links" href="">
                  <FontAwesomeIcon
                    className="contact__icon"
                    icon={faLinkedin}
                  />
                </a>
              </li>
              <li>
                <a className="contact__page--links" href="">
                  <FontAwesomeIcon className="contact__icon" icon={faMessage} />
                </a>
              </li>
              <li>
                <a className="contact__page--links" href="">
                  <FontAwesomeIcon className="contact__icon" icon={faTwitter} />
                </a>
              </li>
            </ul>
          </div>
          <figure id="contact__img--wrapper">
            <img id="contact__img" src={undrawContact} alt="" />
          </figure>
        </div>
      </div>
    </main>
  );
};

export default Contact;
