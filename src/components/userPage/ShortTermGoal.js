import React from "react";
import Time from "./Time";

const ShortTermGoal = props => {
  return (
    <div>
      <p>{props.description}</p>
      <ol>
        {props.timeallocation_set.map(time => (
          <Time key={time.id} {...time} />
        ))}
      </ol>
    </div>
  );
};

export default ShortTermGoal;
