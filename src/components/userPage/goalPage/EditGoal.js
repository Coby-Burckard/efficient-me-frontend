import React from "react";
import { useDispatch } from "react-redux";
import { setEditGoalModal } from "../../../actions/goal";

const EditGoal = (props) => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(setEditGoalModal(props.goalID));
  };

  return (
    <>
      <button className="bold-button--add-time" onClick={openModal}>
        Edit goal
      </button>
    </>
  );
};

export default EditGoal;
