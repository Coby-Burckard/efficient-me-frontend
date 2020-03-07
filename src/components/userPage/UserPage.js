import React from "react";
import { useSelector } from "react-redux";
import LongTermGoal from "./LongTermGoal";
import ActivityForm from "./ActivityForm"
import { startAddActivity } from "../../actions/activity"
import DeleteActivityButton from "./DeleteActivityButton";

const UserPage = () => {
  const longTermGoals = useSelector(store => store.data.entities.activities);
  return (
    <div>
      <ActivityForm onSubmit={startAddActivity}/>
      {
        Object.keys(longTermGoals).map(ltgKey => {
          const LTG = longTermGoals[ltgKey]
          return (
            <>
              <LongTermGoal key={LTG.id} {...LTG} />
              <DeleteActivityButton key={LTG.id + 'b'} id={LTG.id} />
            </>
          )
        })
      }
    </div>
  );
};

export default UserPage;
