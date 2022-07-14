import React from "react";
import portfolio from '../../Assets/client-portfolio-mock-up.png';

const ClientEPortfolio = () => {
  return (
    <main className="project__overview--page">
      <div className="row">
        <div className="project__overview--container">
          <div className="project__description--container">
            <h1 className="project__title">Client E-Portfolio</h1>
            <div className="project__links--container">
              <ul className="project__links--list">
                <li>
                  <a
                    className="project__links"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/conradhunter/client-e-portfolio"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    className="project__links"
                    target="_blank"
                    rel="noreferrer"
                    href="https://conradhunter.github.io/client-e-portfolio/"
                  >
                    Live Site
                  </a>
                </li>
              </ul>
            </div>
            <p className="project__para">
              This is mock up project of an E-Portfolio I created to showcase my
              skills using HTML and CSS. This mock up E-Portfolio displays the
              ficticous clients tehcnology stack, along with a section for
              projects to be displayed.
            </p>
          </div>
          <div className="protect__stack--container">
            <h3 className="project__sub-title">Techstack</h3>
            <ul className="project__tech--list">
              <li className="project__technology">HTML</li>
              <li className="project__technology">CSS</li>
            </ul>
          </div>
          <div className="project__purpose--container">
            <h3 className="project__sub-title">Project Purpose</h3>
            <p className="project__para">
              This project was built with the aim of building upon my skills with Cascade Styling Sheets and designing a User Interface.
            </p>
          </div>
          <div className="project__problems--container">
            <h3 className="project__sub-title"></h3>
            <p className="project__para">
            </p>
          </div>
        </div>
        <div className="project__media--wrapper">
          <img className="project__overview--img" src={portfolio} alt="" />
        </div>
      </div>
    </main>
  );
};

export default ClientEPortfolio;
