import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalBody from "../../ModalBody";
import { startDeleteGoal } from "../../../actions/goal";
import { useHistory } from "react-router-dom";

const GoalForm = (props) => {
  const token = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(props.title || "");
  const [description, setDescription] = useState(props.description || "");
  const [hoursRequired, setHoursRequired] = useState(props.hours_required || 0);
  const [date, setDate] = useState(props.deadline || "");
  const history = useHistory();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleHoursRequiredChange = (e) => {
    setHoursRequired(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const goal = {
      title,
      description,
      hours_required: hoursRequired,
      deadline: date,
      activity: props.activityID,
    };
    dispatch(props.onSubmit(token, goal, props.id || null));
    props.setIsOpen(false);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(startDeleteGoal(token, props.id, props.activityID));
    history.push(`/goalpage/${props.activityID}`);
    props.setIsOpen(false);
  };

  return (
    <ModalBody isOpen={props.isOpen} setIsOpen={props.setIsOpen}>
      <form className="modal__form" onSubmit={handleFormSubmit}>
        <input
          placeholder="title"
          type="text"
          value={title}
          onChange={handleTitleChange}
        />
        <input
          placeholder="description"
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        />
        <input
          placeholder="hours required"
          type="number"
          value={hoursRequired}
          onChange={handleHoursRequiredChange}
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

export default GoalForm;
