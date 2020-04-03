import React, { useState } from "react";
import { startAddGoal } from "../../../actions/goal";
import GoalForm from "./GoalForm";

const AddGoal = props => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button className="link-button--nav" onClick={openModal}>
        Add STG
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
