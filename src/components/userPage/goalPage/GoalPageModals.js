import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startEditTime, setEditTimeModal } from "../../../actions/time";
import { startAddTime, setAddTimeModal } from "../../../actions/time";
import {
  startEditActivity,
  setEditActivityModal,
} from "../../../actions/activity";
import TimeForm from "./TimeForm";
import GoalForm from "./GoalForm";
import ActivityForm from "../ActivityForm";
import {
  startEditGoal,
  setEditGoalModal,
  startAddGoal,
  setAddGoalModal,
} from "../../../actions/goal";

const GoalPageModals = (props) => {
  const dispatch = useDispatch();

  //time modal open/close functions and variables
  const editTimeIsOpen = useSelector((state) => state.modal.editTime);
  const addTimeIsOpen = useSelector((state) => state.modal.addTime);

  const setEditTimeIsOpen = (newIsOpen) => {
    dispatch(setEditTimeModal(newIsOpen));
  };

  const setAddTimeIsOpen = (newIsOpen) => {
    dispatch(setAddTimeModal(newIsOpen));
  };

  //goal modal open/close functions and variables
  const addGoalIsOpen = useSelector((state) => state.modal.addGoal);
  const editGoalIsOpen = useSelector((state) => state.modal.editGoal);

  const setEditGoalIsOpen = (newIsOpen) => {
    dispatch(setEditGoalModal(newIsOpen));
  };

  const setAddGoalIsOpen = (newIsOpen) => {
    dispatch(setAddGoalModal(newIsOpen));
  };

  //activity modal open/close functions and variables
  const editActivityIsOpen = useSelector((state) => state.modal.editActivity);

  const setEditActivityIsOpen = (newIsOpen) => {
    dispatch(setEditActivityModal(newIsOpen));
  };

  return (
    <>
      <TimeForm
        isOpen={editTimeIsOpen}
        setIsOpen={setEditTimeIsOpen}
        onSubmit={startEditTime}
      />
      <TimeForm
        isOpen={addTimeIsOpen}
        setIsOpen={setAddTimeIsOpen}
        onSubmit={startAddTime}
      />
      <GoalForm
        isOpen={addGoalIsOpen}
        setIsOpen={setAddGoalIsOpen}
        onSubmit={startAddGoal}
      />
      <GoalForm
        isOpen={editGoalIsOpen}
        setIsOpen={setEditGoalIsOpen}
        onSubmit={startEditGoal}
      />
      <ActivityForm
        isOpen={editActivityIsOpen}
        setIsOpen={setEditActivityIsOpen}
        onSubmit={startEditActivity}
      />
    </>
  );
};

export default GoalPageModals;
