import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startAddActivity, setAddActivityModal } from "../../actions/activity";
import ActivityForm from "./ActivityForm";

const ActivityModal = () => {
  const dispatch = useDispatch();

  //activity modal open/close functions and variables
  const addActivityIsOpen = useSelector((state) => state.modal.addActivity);

  const setAddActivityIsOpen = (newIsOpen) => {
    dispatch(setAddActivityModal(newIsOpen));
  };

  return (
    <>
      <ActivityForm
        isOpen={addActivityIsOpen}
        setIsOpen={setAddActivityIsOpen}
        onSubmit={startAddActivity}
      />
    </>
  );
};

export default ActivityModal;
