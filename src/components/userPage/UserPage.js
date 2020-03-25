import React from "react";
import { useSelector } from "react-redux";
import LongTermGoal from "./LongTermGoal";
import ActivityForm from "./ActivityForm";
import { startAddActivity } from "../../actions/activity";

const UserPage = () => {
  const longTermGoals = useSelector(store => store.data.entities.activities);
  return (
    <div className="content-container--s">
      <div className="goal-page">
        <ActivityForm onSubmit={startAddActivity} />
        {Object.keys(longTermGoals).map(ltgKey => {
          const LTG = longTermGoals[ltgKey];
          return (
            <>
              <LongTermGoal key={LTG.id} {...LTG} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default UserPage;
