import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AddTime from "./AddTime";

const GoalOverview = (props) => {
  const goal = useSelector((state) => state.data.entities.goals[props.goalID]);

  let percentage = Math.floor(
    (goal.complete_hours / goal.hours_required) * 100
  );
  console.log(percentage);
  percentage = isNaN(percentage) ? 0 : percentage;

  return (
    <div className="activity-overview__container">
      <div className="activity-overview__text-container">
        <h2 className="activity-overview__title">{goal.title}</h2>
        <p className="activity_overview__description">{goal.description}</p>
        <AddTime goalID={props.goalID} />
      </div>
      <div className="activity-overview__img-contianer">
        <CircularProgressbar
          background={true}
          backgroundPadding={5}
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            backgroundColor: "#40b6c5",
            pathColor: "white",
            textColor: "white",
            trailColor: "#40b6c5",
          })}
        />
      </div>
    </div>
  );
};

export default GoalOverview;
