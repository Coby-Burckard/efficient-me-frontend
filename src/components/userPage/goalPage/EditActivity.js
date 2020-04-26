import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ActivityForm from "../ActivityForm";
import { setEditActivityModal } from "../../../actions/activity";

const EditActivity = (props) => {
  const dispatch = useDispatch();

  const openForm = () => {
    dispatch(setEditActivityModal(props.id));
  };

  return (
    <>
      <button className="bold-button--stg" onClick={openForm}>
        Edit Long Term Goal
      </button>
    </>
  );
};

export default EditActivity;
