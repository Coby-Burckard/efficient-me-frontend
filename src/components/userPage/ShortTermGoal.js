import React from "react";
import Time from "./Time";
import { useSelector } from "react-redux";
import { selectByKey } from "../../selectors/goals";

const ShortTermGoal = props => {
  const allTimes = useSelector(state => state.data.entities.times)

  const matchedTimes = selectByKey(allTimes, props.timeallocation_set)

  return (
    <div>
      <p>- {props.description}</p>
      <ol>
        {matchedTimes.map(time => <Time key={time.id} {...time}/>)}
      </ol>
    </div>
  );
};

export default ShortTermGoal;
