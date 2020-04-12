import React, { useState } from "react";
import { startAddActivity } from "../../actions/activity";
import ActivityForm from "./ActivityForm";
import longTerm from "../svg/longTerm.svg";

const AddActivity = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => {
    setIsOpen(true);
  };

  return (
    <section className="add-activity__container">
      <div className="add-activity">
        {/* <div className="add-activity__img-container">
          <img
            className="add-activity__img"
            src={longTerm}
            alt="long term goal"
          />
        </div> */}
        <div className="add-activity__text-container">
          <h2 className="add-activity__title">Long Term Goals</h2>
          <p className="add-activity__subtitle">
            Lorem ipsum dolor sit amet, eum iudico fuisset in, lorem aperiam vis
            eu. Eu has mutat scripserit, sonet possit ne qui.
          </p>
          <button className="bold-button--add-activity" onClick={openForm}>
            Create Long Term Goal
          </button>
          <ActivityForm
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            onSubmit={startAddActivity}
          />
        </div>
      </div>
    </section>
  );
};

export default AddActivity;
