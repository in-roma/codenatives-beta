import React from "react";
import { Link } from "react-router-dom";

const Homeslide2 = () => {

  return (
    <div className="slide">
        <img id="central-window" src={process.env.PUBLIC_URL + "/img/central-window.png"} alt=""/>
        <div id="central-catchphrase">
              <h1>Become a code native 2</h1>
              <h2>And get exclusive job offers</h2>
              <div className="central-language-selection">
                <span id="language-catchphrase">Choose your language</span>
                <div className="btn-language">
                  <img id="language-arrow" src={process.env.PUBLIC_URL + "/img/arrow-btn-selector.svg"} alt=""/>
                  <div className="language-selection">
                    <span>Javascript</span>
                    <span>HTML/CSS</span>
                    <span>React</span>
                    <span>Node JS</span>
                    <span>Command lines</span>
                    <span>Git / Github</span>
                    <span>Full stack</span>

                  </div>
                </div>
              </div>
              <div className="central-buttons">
                <Link to="/practice" className="button-practice">
                  <div>Practice</div>
                </Link>
                <Link to="/test" className="button-test">
                  <div>Start test</div>
                </Link>
              </div>
        </div>
   </div>
    
  );
};

export default Homeslide2;
