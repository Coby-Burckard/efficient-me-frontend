import React from "react";
import ShortTermGoal from "./ShortTermGoal";

const LongTermGoal = props => {
  return (
    <div>
      <p>{props.description}</p>
      <ol>
        {props.goal_set.map(STG => (
          <li>
            <ShortTermGoal key={STG.id} {...STG} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default LongTermGoal;
