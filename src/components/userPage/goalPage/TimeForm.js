import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalBody from "../../ModalBody";
import { startDeleteTime } from "../../../actions/time";

const TimeForm = (props) => {
  const dispatch = useDispatch();

  //initializing submission parameters based on if form is for editing or adding
  let goalID = useSelector((state) => state.modal.addTime);
  const timeID = useSelector((state) => state.modal.editTime);
  const time = useSelector((state) => state.data.entities.times[+timeID]) || {
    a: "a",
  };

  if (!!time.id) {
    goalID = time.goal;
  }

  //obtaining user data
  const token = useSelector((state) => state.user.user);

  //obtaining form error value
  const error = useSelector((state) => state.data.errors.timeError);

  //initializing form values
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [timeSpent, setTimeSpent] = useState(0);
  const [date, setDate] = useState("");

  //when time changes - modifying the default form values
  useEffect(() => {
    setTitle(time.title || "");
    setDescription(time.description || "");
    setTimeSpent(time.time_speant || 0);
    setDate(time.date_completed || "");
  }, [time.date_completed, time.description, time.time_speant, time.title]);

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleTimeSpentChange = (e) => {
    setTimeSpent(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const timeSub = {
      title,
      description,
      time_speant: timeSpent,
      date_completed: date,
      goal: goalID,
    };
    dispatch(props.onSubmit(token, timeSub, time.id || null));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(startDeleteTime(token, time.id, goalID));
    props.setIsOpen(false);
  };

  return (
    <ModalBody isOpen={!!props.isOpen} setIsOpen={props.setIsOpen}>
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
        {!!error && <p>{error}</p>}
        <div className="modal__button-container">
          <button
            className="link-button link-button--submit-modal"
            type="submit"
          >
            Save
          </button>
          {!!time.id ? (
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
