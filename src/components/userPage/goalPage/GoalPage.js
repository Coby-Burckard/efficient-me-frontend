import React from "react";
import queryString from "query-string";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectByKey } from "../../../selectors/goals";
import AddGoal from "./AddGoal";
import EditGoal from "./EditGoal";

const GoalPage = props => {
  const activityID = props.match.params.id;

  // selecting the goals that correspond to this activity
  const allGoals = useSelector(state => state.data.entities.goals);
  const activity = useSelector(
    state => state.data.entities.activities[activityID]
  );
  const matchedGoals = selectByKey(allGoals, activity.goal_set);

  // obtaining the active goal from the query string
  const activeGoalID = queryString.parse(props.location.search).gid || 0;

  // selecting the time allocations to display if a goal is active
  const allTimes = useSelector(state => state.data.entities.times);
  const activeGoal = useSelector(
    state => state.data.entities.goals[activeGoalID]
  );
  const matchedTimes = !!activeGoal
    ? selectByKey(allTimes, activeGoal.timeallocation_set)
    : [];

  return (
    <div className="content-container--s">
      <div className="goal-page">
        <div className="goal-page__stg-container">
          <AddGoal activityID={activityID} />
          {matchedGoals.map(goal => (
            <NavLink
              to={`/goalpage/${activityID}?gid=${goal.id}`}
              className="link-button--nav"
              activeClassName="selected"
              exact
              isActive={(match, location) =>
                location.pathname + location.search ===
                `/goalpage/${activityID}?gid=${goal.id}`
              }
            >
              {goal.title}
            </NavLink>
          ))}
        </div>
        <div className="goal-page__time-container">
          <p>long term goal: {activity.id}</p>
          <EditGoal activityID={activityID} {...activeGoal} />
          {matchedTimes.map(time => (
            <div>
              <p>{time.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoalPage;
