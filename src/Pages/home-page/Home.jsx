import React from "react";
import "./home.css";
import personalIMG from "../../Assets/my-picture.png";
import { Link } from "react-router-dom";
import blog from "../../Assets/blog-ss.png";

const Home = () => {
  return (
    <main id="home__page--container">
      <div className="row">
        <section id="about__me--container">
          <div id="left__container">
            <figure>
              <img src={personalIMG} alt="" id="home__personal--img" />
            </figure>
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
              <h6 className="skills__heading">Technology I am familiar with</h6>
              <ul id="skills__list">
                <li className="skills__list--item">Bootstap</li>
                <li className="skills__list--item">Vue.JS</li>
                <li className="skills__list--item">Wordpress</li>
                <li className="skills__list--item">Shopify</li>
                <li className="skills__list--item">AWS</li>
              </ul>
            </div>
          </div>
          <div id="right__container">
            <h2 id="who-am-i__heading">Who Am I?</h2>
            <div>
              <p id="intro__para">
                I am a Frontend Developer with a passion for building User
                friendly Interfaces which create a positive User Experience. I
                am always working towards expanding my technology stack with the
                addition of new languages, libraries and frameworks.
              </p>
              <Link id="about__page--link" to="/about">
                See my extended bio
              </Link>
            </div>
          </div>
        </section>
        <section id="projects__blurb--container">
          <h1 id="home__projects--heading">Projects</h1>
          <div className="project__wrapper">
            <div className="project__info">
              <h2 className="project__name">Project Name</h2>
              <ul className="project__stack">
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
              </ul>
              <p className="project__blurb">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                similique ducimus amet exercitationem dicta dolore numquam
                corporis, consectetur tempore. Veniam tenetur necessitatibus
                consequuntur aspernatur tempore.
              </p>
              <Link to="/">
                <button className="project__link">View Project</button>
              </Link>
            </div>
            <figure className="project__img--wrapper">
              <img className="project__img" src={blog} alt="" />
            </figure>
          </div>
          <div className="project__wrapper">
            <div className="project__info">
              <h2 className="project__name">Project Name</h2>
              <ul className="project__stack">
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
              </ul>
              <p className="project__blurb">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                similique ducimus amet exercitationem dicta dolore numquam
                corporis, consectetur tempore. Veniam tenetur necessitatibus
                consequuntur aspernatur tempore.
              </p>
              <Link to="/">
                <button className="project__link">View Project</button>
              </Link>
            </div>
            <figure className="project__img--wrapper">
              <img className="project__img" src={blog} alt="" />
            </figure>
          </div>
          <div className="project__wrapper">
            <div className="project__info">
              <h2 className="project__name">Project Name</h2>
              <ul className="project__stack">
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
              </ul>
              <p className="project__blurb">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                similique ducimus amet exercitationem dicta dolore numquam
                corporis, consectetur tempore. Veniam tenetur necessitatibus
                consequuntur aspernatur tempore.
              </p>
              <Link to="/">
                <button className="project__link">View Project</button>
              </Link>
            </div>
            <figure className="project__img--wrapper">
              <img className="project__img" src={blog} alt="" />
            </figure>
          </div>
          <div className="project__wrapper">
            <div className="project__info">
              <h2 className="project__name">Project Name</h2>
              <ul className="project__stack">
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
              </ul>
              <p className="project__blurb">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                similique ducimus amet exercitationem dicta dolore numquam
                corporis, consectetur tempore. Veniam tenetur necessitatibus
                consequuntur aspernatur tempore.
              </p>
              <Link to="/">
                <button className="project__link">View Project</button>
              </Link>
            </div>
            <figure className="project__img--wrapper">
              <img className="project__img" src={blog} alt="" />
            </figure>
          </div>
        </section>
        <section id="featured__blogs"></section>
      </div>
    </main>
  );
};

export default Home;
