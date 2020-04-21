import React from "react";
import Time from "./Time";
import TimeOverview from "./TimeOverview";

const TimeList = (props) => {
  return (
    <div className="time-list__outer-border">
      <div className="time-list">
        <TimeOverview goalID={props.id} />
        {props.matchedTimes.map((time) => (
          <Time {...time} />
        ))}
      </div>
    </div>
  );
};

export default TimeList;
