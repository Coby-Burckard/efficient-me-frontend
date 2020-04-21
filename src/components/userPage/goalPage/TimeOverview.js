import React from "react";
import AddTime from "./AddTime";
import EditGoal from "./EditGoal";

const TimeOverview = (props) => {
  return (
    <div className="time-list__overview">
      <AddTime goalID={props.goalID} />
      <EditGoal goalID={props.goalID} />
    </div>
  );
};

export default TimeOverview;
