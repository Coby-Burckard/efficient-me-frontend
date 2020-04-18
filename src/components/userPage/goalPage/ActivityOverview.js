import React from "react";
import { useSelector } from "react-redux";
import "react-circular-progressbar/dist/styles.css";
import EditActivity from "./EditActivity";
import AddGoal from "./AddGoal";

const ActivityOverview = (props) => {
  const activity = useSelector(
    (state) => state.data.entities.activities[props.activityID]
  );

  return (
    <div className="activity-overview__container">
      <h2 className="activity-overview__title">{activity.title}</h2>
      <div className="activity-overview__info-container">
        <div className="activity-overview__text-container">
          <p className="activity_overview__description">
            {activity.description}
          </p>
          <div className="activity-overview__edit-container">
            <EditActivity id={props.activityID} />
            <AddGoal activityID={props.activityID} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityOverview;
