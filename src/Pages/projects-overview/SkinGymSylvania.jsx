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
                  <a className="project__links" href="">
                    Github
                  </a>
                </li>
                <li>
                  <a className="project__links" href="">
                    Live Site
                  </a>
                </li>
              </ul>
            </div>
            <p className="project__para">
              I built this commercial project for a local business as my first
              contracted opportunity. I worked with the business owner to bring
              their vision to life and create a User Interface and User
              Experiece which would drive potential clients towards the desired
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              exercitationem minus perferendis assumenda nihil, praesentium
              quidem doloribus distinctio impedit neque animi eaque aliquid a
              iure.
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
