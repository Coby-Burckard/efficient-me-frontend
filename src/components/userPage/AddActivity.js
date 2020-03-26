import React, { useState } from "react";
import { startAddActivity } from "../../actions/activity";
import ActivityForm from "./ActivityForm";

const AddActivity = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <button onClick={openForm}>Add Activity</button>
      <ActivityForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onSubmit={startAddActivity}
      />
    </div>
  );
};

export default AddActivity;
