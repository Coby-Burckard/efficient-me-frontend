import React, { useState } from "react";
import { startEditTime } from "../../../actions/time";
import TimeForm from "./TimeForm";

const EditTime = props => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button className="link-button--nav" onClick={openModal}>
        Edit Time
      </button>
      <TimeForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onSubmit={startEditTime}
        {...props}
      />
    </>
  );
};

export default EditTime;
