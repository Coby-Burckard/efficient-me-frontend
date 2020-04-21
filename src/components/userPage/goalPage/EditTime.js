import React from "react";
import { useDispatch } from "react-redux";
import { setEditTimeModal } from "../../../actions/time";

const EditTime = (props) => {
  const dispatch = useDispatch();

  const openModal = () => {
    console.log("opening modal");
    dispatch(setEditTimeModal(props.id));
  };

  return (
    <>
      <button className="link-button--time" onClick={openModal}>
        Edit
      </button>
    </>
  );
};

export default EditTime;
