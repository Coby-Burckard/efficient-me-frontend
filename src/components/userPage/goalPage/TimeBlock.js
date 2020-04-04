import React from "react";
import { useSelector } from "react-redux";
import { selectByKey } from "../../../selectors/goals";
import EditGoal from "./EditGoal";

const TimeBlock = (props) => {
  //the short term goal id is passed in as a prop
  const activeGoalID = props.activeGoalID;
  const activeGoal = useSelector(
    (state) => state.data.entities.goals[activeGoalID]
  );
  const activityID = activeGoal.activity;

  //returning the times that correspond to the active goal
  const allTimes = useSelector((state) => state.data.entities.times);
  const matchedTimes = !!activeGoal
    ? selectByKey(allTimes, activeGoal.timeallocation_set)
    : [];

  return (
    <div className="goal-page__time-container">
      <EditGoal activityID={activityID} {...activeGoal} />
      {matchedTimes.map((time) => (
        <div>
          <p>{time.title}</p>
        </div>
      ))}
    </div>
  );
};

export default TimeBlock;
