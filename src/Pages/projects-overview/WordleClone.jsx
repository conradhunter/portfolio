import React from "react";
import wordleClone from "../../Assets/wordle-clone-mock-up.png";

const WordleClone = () => {
  return (
    <main className="project__overview--page">
      <div className="row">
        <div className="project__overview--container">
          <div className="project__description--container">
            <h1 className="project__title">Wordle Clone</h1>
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
              Say what you want. Cloning projects have been an amazing way for
              me to learn and refresh the fundamentals of JavaScript. This
              Wordle clone allowed me to develop my skills in JavaScript and
              API's, which in turn have progressed my knowledge of the language.
              A random word is called from the wordsAPI upon initial page load
              from which the player can commence guessing in the same way as the
              original New York Times game.
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
              I built this project to develop my skills at fetching APIs and in
              the general use of the JavaScript language.
            </p>
          </div>
          <div className="project__problems--container">
            <h3 className="project__sub-title">Problems Faced</h3>
            <p className="project__para">
              Unlike the original Wordle game, my clone does not contain a
              feature which checks the lists of words as to match the players
              guess before progressing to the next move or completion of the
              game. This however is a feature I wish do add in the future as it
              would be a new topic for me to learn and use.
            </p>
          </div>
        </div>
        <div className="project__media--wrapper">
          <img className="project__overview--img" src={wordleClone} alt="" />
        </div>
      </div>
    </main>
  );
};

export default WordleClone;
