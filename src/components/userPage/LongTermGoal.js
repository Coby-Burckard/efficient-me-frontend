import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { startEditActivity } from "../../actions/activity";
import { selectByKey } from "../../selectors/goals";
import ActivityForm from "./ActivityForm";

const LongTermGoal = props => {
  const allGoals = useSelector(state => state.data.entities.goals);
  const matchedGoals = selectByKey(allGoals, props.goal_set);
  const [isOpen, setIsOpen] = useState(false);

  const history = useHistory();

  const handleViewClick = () => {
    history.push(`/goalpage/${props.id}`);
  };

  const handleEditClick = () => {
    setIsOpen(true);
  };

  console.log(props);
  return (
    <div className="card">
      <div className="ltg__top-row">
        <h2 className="ltg__title">{props.title}</h2>
        <div className="ltg__top-row--buttons">
          <button className="link-button" onClick={handleViewClick}>
            View
          </button>
          <button className="link-button" onClick={handleEditClick}>
            Edit
          </button>
          <ActivityForm
            onSubmit={startEditActivity}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            {...props}
          />
        </div>
      </div>
      <p className="ltg__description">{props.description}</p>
      <p className="ltg__hours">hours</p>
      <p className="ltg__complete">complete</p>
    </div>
  );
};

export default LongTermGoal;
