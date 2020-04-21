import React, { useState } from "react";
import { startEditTime } from "../../../actions/time";
import TimeForm from "./TimeForm";

const EditTime = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    console.log("opening modal");
    setIsOpen(true);
  };

  return (
    <>
      <button className="link-button--time" onClick={openModal}>
        Edit
      </button>
      <TimeForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onSubmit={startEditTime}
        goalID={props.goalID}
        {...props}
      />
    </>
  );
};

export default EditTime;
