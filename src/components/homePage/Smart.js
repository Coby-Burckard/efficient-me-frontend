import React from "react";
import thinking from "../svg/thinking.svg";

const Smart = () => {
  return (
    <div className="body-container body-container--headline">
      <div className="smart__img-container">
        <img className="smart__img" src={thinking} alt="thinking" />
      </div>
      <div className="smart__text-container">
        <h2 className="smart__title">Remember to keep your goals</h2>
        <p className="smart__subtitle">
          <span className="smart__letter">S</span>pecific
        </p>
        <p className="smart__subtitle">
          <span className="smart__letter">M</span>easureable
        </p>
        <p className="smart__subtitle">
          <span className="smart__letter">A</span>ttainable
        </p>
        <p className="smart__subtitle">
          <span className="smart__letter">R</span>elevant
        </p>
        <p className="smart__subtitle">
          <span className="smart__letter">T</span>ime-based
        </p>
      </div>
    </div>
  );
};

export default Smart;
