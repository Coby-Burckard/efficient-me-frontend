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
    <>
      <div className="card add-activity">
        <div className="add-activity__top-row">
          <img
            className="add-activity__img"
            src={longTerm}
            alt="long term goal"
          />
          <h2 className="ltg__title">Long term goals</h2>
        </div>
        <p className="ltg__subtitle">
          What do you want to acomplish 6 - 12 months from now?
        </p>
        <div className="add-activity__bottom-row">
          <button className="bold-button" onClick={openForm}>
            Create
          </button>
        </div>
      </div>
      <ActivityForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onSubmit={startAddActivity}
      />
    </>
  );
};

export default AddActivity;
