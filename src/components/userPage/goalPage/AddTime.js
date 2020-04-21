import React, { useState } from "react";
import { startAddTime } from "../../../actions/time";
import TimeForm from "./TimeForm";

const AddTime = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button className="bold-button--add-time" onClick={openModal}>
        Log time
      </button>
      <TimeForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        goalID={props.goalID}
        onSubmit={startAddTime}
      />
    </>
  );
};

export default AddTime;
