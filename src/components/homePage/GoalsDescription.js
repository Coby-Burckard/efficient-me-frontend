import React from "react";
import longTerm from "../svg/longTerm.svg";
import shortTerm from "../svg/shortTerm.svg";
import time from "../svg/time.svg";

const GoalsDescription = () => {
  return (
    <div className="body-container">
      <div className="goals-description__img-container">
        <div className="goals-description__subsection">
          <img className="svg--long" src={longTerm} alt="long term" />
          <div className="goals-description__text">
            Establish a SMART long term goal
          </div>
        </div>
        <div className="goals-description__subsection goals-description__subsection--short">
          <img className="svg--short" src={shortTerm} alt="short term" />
          <div className="goals-description__text goals-description__text--short">
            Create short term goals to build up to your long term goal
          </div>
        </div>
        <div className="goals-description__subsection goals-description__subsection--time">
          <img className="svg--time" src={time} alt="time" />
          <div className="goals-description__text goals-description__text--time">
            Log time towards each short term goal as you work
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalsDescription;
