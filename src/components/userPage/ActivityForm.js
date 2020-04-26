import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalBody from "../ModalBody";
import { startDeleteActivity } from "../../actions/activity";
import { useHistory } from "react-router-dom";

const ActivityFrom = (props) => {
  //obtaining activity
  const activityID = useSelector((state) => state.modal.editActivity);
  const activity = useSelector(
    (state) => state.data.entities.activities[+activityID]
  ) || { a: "a" };

  //initilizing key values
  const token = useSelector((state) => state.user.user);
  const error = useSelector((state) => state.data.errors.activityError);
  const dispatch = useDispatch();
  const history = useHistory();

  //initializing local state
  const [title, setTitle] = useState(activity.title || "");
  const [description, setDescription] = useState(activity.description || "");

  useEffect(() => {
    console.log("calling use effect for activity", activity, activityID);
    setTitle(activity.title || "");
    setDescription(activity.description || "");
  }, [activity, activity.description, activity.title, activityID]);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const activity = {
      title,
      description,
      activity_type: [1],
    };
    dispatch(props.onSubmit(token, activity, activityID || null));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(startDeleteActivity(token, activity.id));
    props.setIsOpen(false);
    history.push("/userpage");
  };

  return (
    <>
      <ModalBody isOpen={props.isOpen} setIsOpen={props.setIsOpen}>
        <form className="modal__form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={onTitleChange}
          />
          <textarea
            placeholder="description"
            value={description}
            onChange={onDescriptionChange}
          />
          {!!error ? <p className="modal__error">{error}</p> : <></>}
          <div className="modal__button-container">
            <button
              className="link-button link-button--submit-modal"
              type="submit"
            >
              Save
            </button>
            {!!activity.id ? (
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
    </>
  );
};

export default ActivityFrom;
