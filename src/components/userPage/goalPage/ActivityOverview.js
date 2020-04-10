import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AddGoal from "./AddGoal";

const ActivityOverview = (props) => {
  const activity = useSelector(
    (state) => state.data.entities.activities[props.activityID]
  );

  let percentage = Math.floor(
    (activity.complete_hours / activity.total_hours) * 100
  );
  percentage = percentage || 0;

  return (
    <div className="activity-overview__container">
      <div className="activity-overview__text-container">
        <h2 className="activity-overview__title">{activity.title}</h2>
        <p className="activity_overview__description">{activity.description}</p>
        <AddGoal activityID={props.activityID} />
      </div>
      <div className="activity-overview__img-contianer">
        <CircularProgressbar
          background={true}
          backgroundPadding={5}
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            backgroundColor: "#007685",
            pathColor: "white",
            textColor: "white",
            trailColor: "#007685",
          })}
        />
        {/* <span className="activity-overview__hours">{`${activity.complete_hours} / ${activity.total_hours} hrs`}</span> */}
      </div>
    </div>
  );
};

export default ActivityOverview;
