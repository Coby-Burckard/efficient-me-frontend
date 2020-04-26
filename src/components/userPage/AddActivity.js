import React from "react";
import { setAddActivityModal } from "../../actions/activity";
import { useDispatch } from "react-redux";

const AddActivity = () => {
  const dispatch = useDispatch();

  const openForm = () => {
    dispatch(setAddActivityModal(true));
  };

  return (
    <section className="add-activity__container">
      <div className="add-activity">
        <div className="add-activity__text-container">
          <h2 className="add-activity__title">Long Term Goals</h2>
          <p className="add-activity__subtitle">
            Lorem ipsum dolor sit amet, eum iudico fuisset in, lorem aperiam vis
            eu. Eu has mutat scripserit, sonet possit ne qui.
          </p>
          <button className="bold-button--add-activity" onClick={openForm}>
            Create Long Term Goal
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddActivity;
