import React from "react";
import calculator from "../../Assets/JS-calculator-mock-up.png";

const JavaScriptCalculator = () => {
  return (
    <main className="project__overview--page">
      <div className="row">
        <div className="project__overview--container">
          <div className="project__description--container">
            <h1 className="project__title">Vanilla JavaScript Calculator</h1>
            <div className="project__links--container">
              <ul className="project__links--list">
                <li>
                  <a
                    className="project__links"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/conradhunter/JS-Calculator"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    className="project__links"
                    target="_blank"
                    rel="noreferrer"
                    href="https://conradhunter.github.io/JS-Calculator/"
                  >
                    Live Site
                  </a>
                </li>
              </ul>
            </div>
            <p className="project__para">
              This calculator was built with 100% vanilla JavaScript. It was a
              great learning experience for me and was excellent in helping me
              begin to understand the language of JavaScript and the syntax
              involved. The calculator is a basic calculator consisting of the
              numbers 1 through 9 and the 4 basic operators of addition,
              subtraction, multiplication and divsion. The calculator allows for
              continuous sets of numbers to be input without the requirement of
              hitting the equals sign as the mathematics are performed on the
              fly.
            </p>
          </div>
          <div className="protect__stack--container">
            <h3 className="project__sub-title">Techstack</h3>
            <ul className="project__tech--list">
              <li className="project__technology">HTML</li>
              <li className="project__technology">CSS</li>
              <li className="project__technology">JavaScript</li>
            </ul>
          </div>
          <div className="project__purpose--container">
            <h3 className="project__sub-title">Project Purpose</h3>
            <p className="project__para">
              The puspose of me undertaking this project was to dive head first
              into the learning of JavaScript and the fundamentals of the language.
            </p>
          </div>
          <div className="project__problems--container">
            <h3 className="project__sub-title">Problems Faced</h3>
            <p className="project__para">
              Being my first JavaScript project, I had absolutely no knowledge
              of the process or way to begin this project. This resulted in alot
              of trial and error, along with extensive research of the
              JavaScript best practices.
            </p>
          </div>
        </div>
        <div className="project__media--wrapper">
          <img className="project__overview--img" src={calculator} alt="" />
        </div>
      </div>
    </main>
  );
};

export default JavaScriptCalculator;
