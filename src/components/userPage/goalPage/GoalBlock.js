import React from "react";
import TimeBlock from "./TimeBlock";
import GoalOverview from "./GoalOverview";

const GoalBlock = (props) => {
  const goalID = props.activeGoalID;

  return (
    <div className="goal-page__stg-info-container">
      <GoalOverview goalID={goalID} />
      <TimeBlock activeGoalID={goalID} />
    </div>
  );
};

export default GoalBlock;
