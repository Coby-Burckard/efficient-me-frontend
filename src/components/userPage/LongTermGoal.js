import React from "react";
import { useSelector } from "react-redux";
import { selectByKey } from "../../selectors/goals";
import { useHistory } from "react-router-dom";

const LongTermGoal = props => {
  const allGoals = useSelector(state => state.data.entities.goals);
  const matchedGoals = selectByKey(allGoals, props.goal_set);
  const history = useHistory();

  const handleViewClick = () => {
    history.push(`/goalpage/${props.id}`);
  };

  const handleEditClick = () => {
    console.log("edit LTG", props.id);
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
        </div>
      </div>
      <p className="ltg__description">{props.description}</p>
      <p className="ltg__hours">hours</p>
      <p className="ltg__complete">complete</p>
    </div>
  );
};

export default LongTermGoal;
