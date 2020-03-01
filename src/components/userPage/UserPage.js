import React from "react";
import { useSelector } from "react-redux";
import LongTermGoal from "./LongTermGoal";

const UserPage = () => {
  const longTermGoals = useSelector(store => store.data.activities);

  return (
    <div>
      {longTermGoals.map(LTG => {
        return <LongTermGoal key={LTG.id} {...LTG} />;
      })}
    </div>
  );
};

export default UserPage;
