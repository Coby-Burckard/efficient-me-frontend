import React from "react";
import ShortTermGoal from "./ShortTermGoal";
import { useSelector } from "react-redux";
import { selectByKey } from '../../selectors/goals'

const LongTermGoal = props => {
  const allGoals = useSelector(state => state.data.entities.goals)

  const matchedGoals = selectByKey(allGoals, props.goal_set) 

  return (
    <div>
      <p>{props.description}</p>
      {matchedGoals.map(goal => <ShortTermGoal key={goal.id} {...goal}/>)}
    </div>
  );
};

export default LongTermGoal;
