import React, { useState } from "react";
import { useSelector } from "react-redux";
import LongTermGoal from "./LongTermGoal";
import AddActivity from "./AddActivity";

const UserPage = () => {
  const longTermGoals = useSelector(store => store.data.entities.activities);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="content-container--s">
      <div className="goal-page">
        <AddActivity />
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
