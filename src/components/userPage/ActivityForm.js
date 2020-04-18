import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalBody from "../ModalBody";
import { startDeleteActivity } from "../../actions/activity";

const ActivityFrom = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(props.title || "");
  const [description, setDescription] = useState(props.description || "");
  const token = useSelector((state) => state.user.user);

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
    dispatch(props.onSubmit(token, activity, props.id || null));
    setTitle("");
    setDescription("");
    props.setIsOpen(false);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(startDeleteActivity(token, props.id));
    props.setIsOpen(false);
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
    </>
  );
};

export default ActivityFrom;
