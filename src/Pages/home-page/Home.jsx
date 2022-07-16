import React, { useEffect, useState } from "react";
import "./home.css";
import personalIMG from "../../Assets/my-picture.png";
import { Link } from "react-router-dom";
import blog from "../../Assets/blog-ss.png";
import eportfolio from "../../Assets/client-e-port-ss.png";
import wordleClone from "../../Assets/wordle-clone-ss.png";
import skinGym from "../../Assets/skin-gym-ss.png";
import jsCalculator from "../../Assets/calculator-ss.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import ShredBlog from "../projects-overview/Shred-Blog";
import SkinGymSylvania from "../projects-overview/SkinGymSylvania";
import JavaScriptCalculator from "../projects-overview/JavaScriptCalculator";
import ClientEPortfolio from "../projects-overview/ClientEPortfolio";
import WordleClone from "../projects-overview/WordleClone";
import resume from "../../Assets/conrad-hunter-resume.pdf";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const Home = () => {
  const [postLists, setPostList] = useState([]);

  const postCollection = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollection);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  return (
    <main id="home__page--container">
      <div id="aboutMe__info--container">
        <h1 id="about__me--heading">
          Hi, I'm Conrad Hunter |{" "}
          <span className="hover__text--underline">Frontend Engineer</span>
        </h1>
        <div id="icon__container">
          <a target="_blank" href="https://github.com/conradhunter">
            <FontAwesomeIcon className="home__icon" icon={faGithub} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/conrad-hunter-906a57226/"
          >
            <FontAwesomeIcon className="home__icon" icon={faLinkedin} />
          </a>
          <a href="mailto:conrad@conradhunterdev.com">
            <FontAwesomeIcon className="home__icon" icon={faEnvelope} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/ConradHunter10"
          >
            <FontAwesomeIcon className="home__icon" icon={faTwitter} />
          </a>
          <a target="_blank" rel="noreferrer" href={resume}>
            <FontAwesomeIcon className="home__icon" icon={faFilePdf} />
          </a>
        </div>
        <p id="about__me--para">
          Always Learning 📚 I love travelling ⛰️ I spend my time skiing and
          coding ⛷️
        </p>
      </div>
      <div className="row">
        <section id="about__me--container">
          <div id="left__container">
            <figure id="home__img--wrapper">
              <img src={personalIMG} alt="" id="home__personal--img" />
            </figure>
            <div id="flex__skills">
              <div id="skills__container">
                <h6 className="skills__heading">My Skills</h6>
                <ul id="skills__list">
                  <li className="skills__list--item">HTML</li>
                  <li className="skills__list--item">CSS</li>
                  <li className="skills__list--item">JavaScript</li>
                  <li className="skills__list--item">React</li>
                  <li className="skills__list--item">Firebase</li>
                  <li className="skills__list--item">TailwindCSS</li>
                  <li className="skills__list--item">RESTFUL API</li>
                  <li className="skills__list--item">Creative Cloud</li>
                </ul>
              </div>
              <div id="familiar__container">
                <h6 className="skills__heading">
                  Technology I am familiar with
                </h6>
                <ul id="skills__list">
                  <li className="skills__list--item">Bootstap</li>
                  <li className="skills__list--item">Vue.JS</li>
                  <li className="skills__list--item">Wordpress</li>
                  <li className="skills__list--item">Shopify</li>
                  <li className="skills__list--item">AWS</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="right__container">
            <h2 id="who-am-i__heading">Who Am I?</h2>
            <div id="intro__para--wrapper">
              <p id="intro__para">
                I am a Frontend Developer with a passion for building User
                friendly Interfaces which create a positive User Experience. I
                am always working towards expanding my technology stack with the
                addition of new languages, libraries and frameworks.
              </p>
            </div>
              <Link id="about__page--link" to="/about">
                See my extended bio
              </Link>
          </div>
        </section>
        <section id="projects-overview">
          <h1 id="home__projects--heading">Projects</h1>
          <div className="project__wrapper">
            <div className="project__info">
              <h2 className="project__name">The Shred Blog</h2>
              <ul className="project__stack">
                <li className="project__technology">HTML</li>
                <li className="project__technology">CSS</li>
                <li className="project__technology">JavaScript</li>
                <li className="project__technology">React</li>
                <li className="project__technology">Firebase</li>
              </ul>
              <p className="project__blurb">
                I built this personal project to extend my knowledge within
                React and Firebase. Firebase authentication allows the user to
                sign-in with Google and in turn create a blog post. All blog
                posts are uploaded to the Firebase Firestore database and
                displayed on the website.
              </p>
              <Link to="/blog-app" element={<ShredBlog />}>
                <button className="project__link">View Project</button>
              </Link>
            </div>
            <figure className="project__img--wrapper">
              <img className="project__img" src={blog} alt="" />
            </figure>
          </div>
          <div className="project__wrapper">
            <div className="project__info">
              <h2 className="project__name">Skin Gym Sylvania</h2>
              <ul className="project__stack">
                <li className="project__technology">HTML</li>
                <li className="project__technology">CSS</li>
                <li className="project__technology">JavaScript</li>
                <li className="project__technology">React</li>
              </ul>
              <p className="project__blurb">
                My first commercial project which I developed from scratch for a
                local beauty salon. This was also my first React web application
                and it helped me tremendously at understanding the core concepts
                of the React library.
              </p>
              <Link to="/skin-gym-sylvania" element={<SkinGymSylvania />}>
                <button className="project__link">View Project</button>
              </Link>
            </div>
            <figure className="project__img--wrapper">
              <img className="project__img" src={skinGym} alt="" />
            </figure>
          </div>
          <div className="project__wrapper">
            <div className="project__info">
              <h2 className="project__name">Vanilla JavaScript Calculator</h2>
              <ul className="project__stack">
                <li className="project__technology">HTML</li>
                <li className="project__technology">CSS</li>
                <li className="project__technology">JavaScript</li>
              </ul>
              <p className="project__blurb">
                A fully functioning calculator built with vanilla JavaScript.
                The development process allowed me to gain a core understanding
                of the JavaScript language as a whole.
              </p>
              <Link
                to="/javascript-calculator"
                element={<JavaScriptCalculator />}
              >
                <button className="project__link">View Project</button>
              </Link>
            </div>
            <figure className="project__img--wrapper">
              <img className="project__img" src={jsCalculator} alt="" />
            </figure>
          </div>
          <div className="project__wrapper">
            <div className="project__info">
              <h2 className="project__name">Wordle Clone</h2>
              <ul className="project__stack">
                <li className="project__technology">HTML</li>
                <li className="project__technology">CSS</li>
                <li className="project__technology">JavaScript</li>
                <li className="project__technology">Rapid API</li>
              </ul>
              <p className="project__blurb">
                I Know what you are thinking...A tutorial project?. Yes, but the
                building of this project was pivotal in the process of
                understanding JavaScript and was my first use of an API. I also
                added my own flavour to this clone...
              </p>
              <Link to="/wordle-clone" element={<WordleClone />}>
                <button className="project__link">View Project</button>
              </Link>
            </div>
            <figure className="project__img--wrapper">
              <img className="project__img" src={wordleClone} alt="" />
            </figure>
          </div>
          <div className="project__wrapper">
            <div className="project__info">
              <h2 className="project__name">Client E-Portfolio</h2>
              <ul className="project__stack">
                <li className="project__technology">HTML</li>
                <li className="project__technology">CSS</li>
              </ul>
              <p className="project__blurb">
                A mock up E-portfolio built for a fictitious client using HTML
                and CSS best practices.
              </p>
              <Link to="/client-eportfolio" element={<ClientEPortfolio />}>
                <button className="project__link">View Project</button>
              </Link>
            </div>
            <figure className="project__img--wrapper">
              <img className="project__img" src={eportfolio} alt="" />
            </figure>
          </div>
          <div className="project__wrapper">
            <div className="project__info">
              <h2 className="project__name">Fuel Economy Calculator</h2>
              <ul className="project__stack">
                <li className="project__technology">HTML</li>
                <li className="project__technology">CSS</li>
                <li className="project__technology">JavaScript</li>
                <li className="project__technology">RESTFUL API</li>
              </ul>
              <p className="project__blurb">Coming soon....</p>
              {/* <Link
                to="/javascript-calculator"
                element={<JavaScriptCalculator />}
              > */}
              <button disabled className="project__link disabled">
                View Project
              </button>
              {/* </Link> */}
            </div>
            <figure className="project__img--wrapper">
              <img className="project__img coming__soon" src={blog} alt="" />
            </figure>
          </div>
        </section>
        <section id="featured__blogs">
          <h1 id="home__blogs--heading">Featured Blog Posts</h1>
          <div id="featured__blogs--wrapper">
            {postLists.slice(0, 3).map((post) => {
              return (
                <div key={post} className="home__blog--post">
                  <h1 className="home__blog--title">{post.title}</h1>
                  <p className="home__blog--postBlurb">{post.blogBlurb}</p>
                  <p className="home__blog--postDate">{post.date}</p>
                  {/* BLOG IMAGE? 
                  Create an array featuring all images of my blog posts and call each index as required? .slice(0,3) for blogs
                */}
                  <Link className="home__blog--link" to="/blog">
                    View Post
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
