import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import AddGoal from "./AddGoal";
import { selectByKey } from "../../../selectors/goals";

const ShortTermList = (props) => {
  // selecting the goals that correspond to this activity
  const allGoals = useSelector((state) => state.data.entities.goals);
  const activity = useSelector(
    (state) => state.data.entities.activities[props.activityID]
  );
  const matchedGoals = selectByKey(allGoals, activity.goal_set);

  return (
    <div className="goal-page__stg-container">
      <AddGoal activityID={props.activityID} />
      {matchedGoals.map((goal) => (
        <NavLink
          to={`/goalpage/${props.activityID}?gid=${goal.id}`}
          className="link-button--nav"
          activeClassName="selected"
          exact
          isActive={(match, location) =>
            location.pathname + location.search ===
            `/goalpage/${props.activityID}?gid=${goal.id}`
          }
        >
          {goal.title}
        </NavLink>
      ))}
    </div>
  );
};

export default ShortTermList;
