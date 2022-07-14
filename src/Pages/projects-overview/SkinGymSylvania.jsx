import React from "react";
import skinGym from "../../Assets/skin-gym-mock-up.png";
import "./projects.css";

const SkinGymSylvania = () => {
  return (
    <main className="project__overview--page">
      <div className="row">
        <div className="project__overview--container">
          <div className="project__description--container">
            <h1 className="project__title">Skin Gym Sylvania</h1>
            <div className="project__links--container">
              <ul className="project__links--list">
                <li>
                  <a
                    className="project__links"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/conradhunter/skin-gym-react"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    className="project__links"
                    target="_blank"
                    rel="noreferrer"
                    href="https://skin-gym-sylvania-react.netlify.app"
                  >
                    Live Site
                  </a>
                </li>
              </ul>
            </div>
            <p className="project__para">
              I built this commercial project for a local business as my first
              contracted opportunity. I worked with the business owner to bring
              their vision to life and create a User Interface and User
              Experience which would drive potential clients towards the desired
              sales channels.
            </p>
          </div>
          <div className="protect__stack--container">
            <h3 className="project__sub-title">Techstack</h3>
            <ul className="project__tech--list">
              <li className="project__technology">HTML</li>
              <li className="project__technology">CSS</li>
              <li className="project__technology">JavaScript</li>
              <li className="project__technology">React</li>
            </ul>
          </div>
          <div className="project__purpose--container">
            <h3 className="project__sub-title">Project Purpose</h3>
            <p className="project__para">
              Provide a webpage for this business from which clients and
              potential clients are able to view and book sessions from the
              available services provided. The businesses previous webpage was a
              basic template and the owner wanted to expand on it.
            </p>
          </div>
          <div className="project__problems--container">
            <h3 className="project__sub-title">Problems Faced</h3>
            <p className="project__para">
              Being my first contracted work and first major project using
              react, there was alot to learn involving the syntax and methods
              involved. Throughout the research I was able to gain an excellent
              knowledge of the use of React Hooks and Reusable components which
              were both concepts unknown to me before the commencements of this
              project.
            </p>
          </div>
        </div>
        <div className="project__media--wrapper">
          <img className="project__overview--img" src={skinGym} alt="" />
        </div>
      </div>
    </main>
  );
};

export default SkinGymSylvania;
