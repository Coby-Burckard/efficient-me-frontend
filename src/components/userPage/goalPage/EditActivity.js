import React, { useState } from "react";
import { useSelector } from "react-redux";
import ActivityForm from "../ActivityForm";
import { startEditActivity } from "../../../actions/activity";

const EditActivity = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const activity = useSelector(
    (state) => state.data.entities.activities[props.id]
  );

  const openForm = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button className="bold-button--stg" onClick={openForm}>
        Edit Long Term Goal
      </button>
      <ActivityForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onSubmit={startEditActivity}
        {...activity}
      />
    </>
  );
};

export default EditActivity;
