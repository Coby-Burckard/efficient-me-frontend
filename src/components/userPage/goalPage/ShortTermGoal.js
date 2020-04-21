import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectByKey } from "../../../selectors/goals";
import ShortTermBody from "./ShortTermBody";
import TimeList from "./TimeList";

const ShortTermGoal = (props) => {
  const allTimes = useSelector((state) => state.data.entities.times);

  const matchedTimes = selectByKey(allTimes, props.timeallocation_set);

  const [isActive, setIsActive] = useState(false);

  const openTimeList = () => {
    console.log("setting is active to - ", !isActive);
    setIsActive(!isActive);
  };

  return (
    <div className="stg-goal-time-list-container">
      <ShortTermBody {...props} click={openTimeList} />
      {isActive ? <TimeList {...props} matchedTimes={matchedTimes} /> : <></>}
    </div>
  );
};

export default ShortTermGoal;
