import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectByKey } from "../../../selectors/goals";
import ShortTermBody from "./ShortTermBody";

const ShortTermGoal = (props) => {
  const allTimes = useSelector((state) => state.data.entities.times);

  const matchedTimes = selectByKey(allTimes, props.timeallocation_set);

  const [isActive, setIsActive] = useState(false);

  const openTimeList = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="stg-goal-time-list-container" onClick={openTimeList}>
      <ShortTermBody {...props} />
      {isActive ? (
        <ol>
          {matchedTimes.map((time) => (
            <li>{time.title}</li>
          ))}
        </ol>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ShortTermGoal;
