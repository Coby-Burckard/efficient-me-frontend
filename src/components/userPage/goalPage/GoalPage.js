import React from "react";
import ActivityOverview from "./ActivityOverview";
import ShortTermList from "./ShortTermList";
import GoalPageModals from "./GoalPageModals";

const GoalPage = (props) => {
  const activityID = props.match.params.id;

  return (
    <div className="content-container--goal-page">
      <GoalPageModals />
      <ActivityOverview activityID={activityID} />
      <ShortTermList activityID={activityID} />
    </div>
  );
};

export default GoalPage;
