import React, { useState } from "react";
import { startEditGoal } from "../../../actions/goal";
import GoalForm from "./GoalForm";
import { useSelector } from "react-redux";

const EditGoal = (props) => {
  const goal = useSelector((state) => state.data.entities.goals[props.goalID]);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button className="bold-button--add-time" onClick={openModal}>
        Edit goal
      </button>
      <GoalForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onSubmit={startEditGoal}
        {...props}
        {...goal}
        activityID={goal.activity}
      />
    </>
  );
};

export default EditGoal;
