import React from "react";
import { useSelector } from "react-redux";
import LongTermGoal from "./LongTermGoal";

const UserPage = () => {
  const longTermGoals = useSelector(store => store.data.entities.activities);
  return (
    <div>
      {
        Object.keys(longTermGoals).map(ltgKey => {
          const LTG = longTermGoals[ltgKey]
          return <LongTermGoal key={LTG.id} {...LTG} />
        })
      }
    </div>
  );
};

export default UserPage;
