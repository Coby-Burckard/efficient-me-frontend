import React from "react";

const GoalPage = props => {
  return (
    <div className="content-container--s">
      <p>{props.match.params.id}</p>
    </div>
  );
};

export default GoalPage;
