import React from 'react';
import blog from '../../Assets/blog-mock-up.png';

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut
                laboriosam sit dicta repudiandae qui adipisci, deserunt dolorem
                omnis ipsa voluptate magnam libero modi praesentium in quod
                deleniti! Praesentium nemo saepe nihil temporibus consequatur
                assumenda ratione fuga magnam dignissimos? Eos expedita impedit
                eaque ipsa eum quae consectetur ipsam reprehenderit inventore!
              </p>
            </div>
            <div className="protect__stack--container">
              <h3 className="project__sub-title">Techstack</h3>
              <ul className="project__tech--list">
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
                <li className="project__technology">HTML</li>
              </ul>
            </div>
            <div className="project__purpose--container">
              <h3 className="project__sub-title">Project Purpose</h3>
              <p className="project__para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                sequi minima perspiciatis? Laboriosam saepe neque et! Nobis iure
                illum laborum quidem cumque laudantium, impedit mollitia?
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
}

export default ClientEPortfolio;
