import React from "react";
import { setAddGoalModal } from "../../../actions/goal";
import { useDispatch } from "react-redux";

const AddGoal = (props) => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(setAddGoalModal(props.activityID));
  };

  return (
    <>
      <button className="bold-button--stg-list" onClick={openModal}>
        New short term goal
      </button>
    </>
  );
};

export default AddGoal;
