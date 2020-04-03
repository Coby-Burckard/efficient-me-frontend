import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalBody from "../../ModalBody";
import startDeleteTime from "../../../actions/time";

const TimeForm = props => {
  const token = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(props.title || "");
  const [description, setDescription] = useState(props.description || "");
  const [timeSpent, setTimeSpent] = useState(props.time_speant || 0);
  const [date, setDate] = useState(props.date_completed || "");

  const handleInputChange = e => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
  };

  const handleTimeSpentChange = e => {
    setTimeSpent(e.target.value);
  };

  const handleDateChange = e => {
    setDate(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const time = {
      title,
      description,
      time_speant: timeSpent,
      date_completed: date,
      goal: props.goalID
    };
    dispatch(props.onSubmit(token, time, props.id || null));
    props.setIsOpen(false);
  };

  const handleDelete = e => {
    e.preventDefault();
    dispatch(startDeleteTime(token, props.id));
    props.setIsOpen(false);
  };

  return (
    <ModalBody isOpen={props.isOpen} setIsOpen={props.setIsOpen}>
      <form className="modal__form" onSubmit={handleFormSubmit}>
        <input
          placeholder="title"
          type="text"
          value={title}
          onChange={handleInputChange}
        />
        <input
          placeholder="description"
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        />
        <input
          placeholder="time spent"
          type="number"
          value={timeSpent}
          onChange={handleTimeSpentChange}
        />
        <input type="date" value={date} onChange={handleDateChange} />
        <div className="modal__button-container">
          <button
            className="link-button link-button--submit-modal"
            type="submit"
          >
            Save
          </button>
          {!!props.id ? (
            <button
              className="link-button link-button--submit-modal"
              onClick={handleDelete}
            >
              Delete
            </button>
          ) : (
            <></>
          )}
        </div>
      </form>
    </ModalBody>
  );
};

export default TimeForm;
