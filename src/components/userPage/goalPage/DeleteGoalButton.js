import React from "react";
import { startDeleteGoal } from "../../../actions/goal";
import { useSelector, useDispatch } from "react-redux";

const DeleteGoalButton = props => {
  const dispatch = useDispatch();

  const token = useSelector(state => state.user.user);

  const handleButtonClick = () => {
    dispatch(startDeleteGoal(token, props.id, props.activityID));
  };

  return (
    <>
      <button onClick={handleButtonClick}>Remove goal</button>
    </>
  );
};

export default DeleteGoalButton;
