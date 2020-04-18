import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import AddGoal from "./AddGoal";
import { selectByKey } from "../../../selectors/goals";
import GoalOverview from "./GoalOverview";
import ShortTermGoal from "./ShortTermGoal";

const ShortTermList = (props) => {
  // selecting the goals that correspond to this activity
  const allGoals = useSelector((state) => state.data.entities.goals);
  const activity = useSelector(
    (state) => state.data.entities.activities[props.activityID]
  );
  const matchedGoals = selectByKey(allGoals, activity.goal_set);

  return (
    <div className="stg-list">
      {matchedGoals.map((goal) => (
        <ShortTermGoal {...goal} />
      ))}
    </div>
  );
};

export default ShortTermList;
