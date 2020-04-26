import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalBody from "../../ModalBody";
import { startDeleteGoal } from "../../../actions/goal";

const GoalForm = (props) => {
  //obtianing the goal to be added or edited
  let activityID = useSelector((state) => state.modal.addGoal);
  const goalID = useSelector((state) => state.modal.editGoal);
  const goal = useSelector((state) => state.data.entities.goals[+goalID]) || {
    a: "a",
  };
  if (!!goal.id) {
    activityID = goal.activity;
  }

  //obtaining error message
  const error = useSelector((state) => state.data.errors.goalError);

  //obtaining user token
  const token = useSelector((state) => state.user.user);

  //initializing form values
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hoursRequired, setHoursRequired] = useState(0);
  const [date, setDate] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setTitle(goal.title || "");
    setDescription(goal.description || "");
    setHoursRequired(goal.hours_required || 0);
    setDate(goal.deadline || "");
  }, [goal.deadline, goal.description, goal.hours_required, goal.title]);

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
    const editedGoal = {
      title,
      description,
      hours_required: hoursRequired,
      deadline: date,
      activity: activityID,
    };
    dispatch(props.onSubmit(token, editedGoal, goal.id || null));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(startDeleteGoal(token, props.id, activityID));
    props.setIsOpen(false);
  };

  return (
    <ModalBody isOpen={!!props.isOpen} setIsOpen={props.setIsOpen}>
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
        {!!error ? <p className="form__error">{error}</p> : <></>}
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
