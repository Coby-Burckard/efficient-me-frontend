import React from "react";
import { useDispatch } from "react-redux";
import { setAddTimeModal } from "../../../actions/time";

const AddTime = (props) => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(setAddTimeModal(props.goalID));
  };

  return (
    <>
      <button className="bold-button--add-time" onClick={openModal}>
        Log time
      </button>
    </>
  );
};

export default AddTime;
