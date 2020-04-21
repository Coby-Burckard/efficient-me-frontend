import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startEditTime, setEditTimeModal } from "../../../actions/time";
import { startAddTime, setAddTimeModal } from "../../../actions/time";
import TimeForm from "./TimeForm";

const GoalPageModals = (props) => {
  const dispatch = useDispatch();
  const editTimeIsOpen = useSelector((state) => state.modal.editTime);
  const addTimeIsOpen = useSelector((state) => state.modal.addTime);

  const setEditTimeIsOpen = (newIsOpen) => {
    dispatch(setEditTimeModal(newIsOpen));
  };

  const setAddTimeIsOpen = (newIsOpen) => {
    dispatch(setAddTimeModal(newIsOpen));
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
    </>
  );
};

export default GoalPageModals;
