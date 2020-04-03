import React, { useState } from "react";
import { startEditGoal } from "../../../actions/goal";
import GoalForm from "./GoalForm";

const EditGoal = props => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button className="link-button" onClick={openModal}>
        Edit
      </button>
      <GoalForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onSubmit={startEditGoal}
        {...props}
      />
    </>
  );
};

export default EditGoal;
