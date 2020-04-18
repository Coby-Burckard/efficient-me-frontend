import React, { useState } from "react";
import { startAddGoal } from "../../../actions/goal";
import GoalForm from "./GoalForm";

const AddGoal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button className="bold-button--stg-list" onClick={openModal}>
        New short term goal
      </button>
      <GoalForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        activityID={props.activityID}
        onSubmit={startAddGoal}
      />
    </>
  );
};

export default AddGoal;
