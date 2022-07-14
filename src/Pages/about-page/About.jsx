import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./about.css";
import skiing from "../../Assets/skiing.png";
import resume from '../../Assets/conrad-hunter-resume.pdf';

const About = () => {
  return (
    <main id="about__me--page">
      <div className="row">
        <h1 id="about__me--main-heading">My Life</h1>
        <section className="story__container">
          <h3 className="about__headings">My Story</h3>
          <p className="about__page--para">
            My first exposure to programming game at the age of 12, when I
            created a small and basic mobile game using C++. In high school
            computer class I built my first basic webpages using HTML and CSS on
            Adobe Dreamweaver. I did not find a love for programming at this
            stage and instead went on to complete a trade in Carpentry after
            school.
          </p>
          <p className="about__page--para">
            After the completion of my trade I decided that I wanted a career
            change into tech. The creative and visual aspect of Frontend
            Engineering caught my attention and I instantly fell in love with
            it. Along with my learning journey towards a Frontend Engineer I
            have also undertaken a Bachelors Degree in Business, majoring in
            Marketing which put together with Frontend Engineering gives me a
            unique skillset.
          </p>
        </section>
        <section className="story__container">
          <h3 className="about__headings">Me As a person</h3>
          <p className="about__page--para">
            I am a 23 year old male with a HUGE travel bug. I am mostly
            interested in travel to the colder regions of the world in search of
            snow fields. I have been skiing since the age of 2 and have never
            stopped (And I dont plan on stopping).
          </p>
          <p className="about__page--para">
            My other passions include playing Football (soccer for the people in
            the back), cooking meals for my friends and family and playing video
            games to relax.
          </p>
        </section>
        <figure id="skiing__img--wrapper">
          <img id="skiing__img" src={skiing} alt="" />
        </figure>
        <section className="story__container">
          <h3 className="about__headings">Me as a colleague</h3>
          <p className="about__page--para">
            I am Frontend Engineer with demonstrated punctuality, reliability,
            resilience, loyalty, ability to work under pressure and to
            deadlines, forward thinking, agile and flexible. I thrive working
            independently and in teams and love to increase my knowledge through
            the collaboration with other like minded individuals.
          </p>
        </section>
        <section id="about__contact--container">
          <h3 id="about__contact--heading">Get in touch with me!</h3>
          <ul id="about__contact--link-list">
            <li>
              <a href="https://www.linkedin.com/in/conrad-hunter-906a57226/" target='_blank' className="about__contact--links">
                <FontAwesomeIcon
                  className="about__contact--icon"
                  icon={faLinkedin}
                />
              </a>
            </li>
            <li>
              <a href="sms:+61433444121" className="about__contact--links">
                <FontAwesomeIcon
                  className="about__contact--icon"
                  icon={faMessage}
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/ConradHunter10" target='_blank' className="about__contact--links">
                <FontAwesomeIcon
                  className="about__contact--icon"
                  icon={faTwitter}
                />
              </a>
            </li>
          </ul>
          <h5 id="resume__heading">Want to see my <a id="resume__link" href={resume}>Résumé?</a></h5>
        </section>
      </div>
    </main>
  );
};

export default About;
