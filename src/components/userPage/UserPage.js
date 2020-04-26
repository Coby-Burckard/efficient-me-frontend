import React, { useState } from "react";
import { useSelector } from "react-redux";
import LongTermGoal from "./LongTermGoal";
import AddActivity from "./AddActivity";
import ActivityModal from "./ActivityModal";

const UserPage = () => {
  const longTermGoals = useSelector((store) => store.data.entities.activities);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="user-page">
      <ActivityModal />
      <div className="content-container--s">
        <AddActivity />
        <section className="ltg">
          {Object.keys(longTermGoals).map((ltgKey, index) => {
            const LTG = longTermGoals[ltgKey];
            const color = index % 2 === 0 ? "#007685" : "#40b6c5";
            return (
              <>
                <LongTermGoal
                  key={LTG.id}
                  {...LTG}
                  index={index}
                  color={color}
                />
              </>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default UserPage;
