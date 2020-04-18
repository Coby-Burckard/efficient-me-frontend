import React from "react";
import queryString from "query-string";
import ActivityOverview from "./ActivityOverview";
import GoalBlock from "./GoalBlock";
import ShortTermList from "./ShortTermList";

const GoalPage = (props) => {
  const activityID = props.match.params.id;

  // obtaining the active goal from the query string
  const activeGoalID = queryString.parse(props.location.search).gid || false;

  return (
    <div className="content-container--goal-page">
      <ActivityOverview activityID={activityID} />
      <ShortTermList activityID={activityID} />
      {!!activeGoalID ? <GoalBlock activeGoalID={activeGoalID} /> : <></>}
    </div>
  );
};

export default GoalPage;
