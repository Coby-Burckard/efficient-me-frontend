import React from "react";
import { useSelector } from "react-redux";
import { selectByKey } from "../../../selectors/goals";

const GoalPage = props => {
  const allGoals = useSelector(state => state.data.entities.goals);
  const activity = useSelector(
    state => state.data.entities.activities[props.match.params.id]
  );

  const matchedGoals = selectByKey(allGoals, activity.goal_set);

  return (
    <div className="content-container--s">
      <p>{activity.id}</p>
      {matchedGoals.map(goal => (
        <p>{goal.title}</p>
      ))}
    </div>
  );
};

export default GoalPage;
