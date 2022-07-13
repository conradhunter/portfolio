import React from "react";
import "./projects.css";
import blog from "../../Assets/blog-mock-up.png";

const ShredBlog = () => {
  return (
    <main className="project__overview--page">
      <div className="row">
        <div className="project__overview--container">
          <div className="project__description--container">
            <h1 className="project__title">Blog</h1>
            <div className="project__links--container">
              <ul className="project__links--list">
                <li>
                  <a
                    className="project__links"
                    href="https://github.com/conradhunter/blog-app"
                    target="_blank"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    className="project__links"
                    href="https://svd-blog-app.netlify.app"
                    target="_blank"
                  >
                    Live Site
                  </a>
                </li>
              </ul>
            </div>
            <p className="project__para">
              This blog app was built with a React Frontend and Firebase
              Backend. Firebase Authentication and Firestore are the 2 features
              of Firebase that are implemented. Firebase Authentication allows a
              user to sign in with Google in o
            </p>
          </div>
          <div className="protect__stack--container">
            <h3 className="project__sub-title">Techstack</h3>
            <ul className="project__tech--list">
              <li className="project__technology">HTML</li>
              <li className="project__technology">CSS</li>
              <li className="project__technology">JavaScript</li>
              <li className="project__technology">React</li>
              <li className="project__technology">Firebase</li>
            </ul>
          </div>
          <div className="project__purpose--container">
            <h3 className="project__sub-title">Project Purpose</h3>
            <p className="project__para">
              This project was built with the intention of expanding my
              knowledge of Firebase and it's core features. From this project I
              plan on creating a Skiwear clothing brand to which the blog is
              linked to.
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
          <img className="project__overview--img" src={blog} alt="" />
        </div>
      </div>
    </main>
  );
};

export default ShredBlog;
