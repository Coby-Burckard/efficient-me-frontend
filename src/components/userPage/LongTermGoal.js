import React from "react";
import ShortTermGoal from "./ShortTermGoal";
import { useSelector } from "react-redux";
import { selectByKey } from '../../selectors/goals'
import { startAddGoal } from "../../actions/goal";
import GoalForm from './GoalForm'
import DeleteGoalButton from './DeleteGoalButton'

const LongTermGoal = props => {
  const allGoals = useSelector(state => state.data.entities.goals)
  const matchedGoals = selectByKey(allGoals, props.goal_set)

  console.log(props)
  return (
    <div>
      <p>Add new goal</p>
      <GoalForm onSubmit={startAddGoal} activityID={props.id} />
      <p>{props.description}</p>
      {matchedGoals.map(goal => {
        return (
        <>
          <ShortTermGoal key={goal.id} {...goal}/>
          <DeleteGoalButton key={goal.id + 'b'} id={goal.id} activityID={props.id}/>
        </>
        ) 
      })}
    </div>
  );
};

export default LongTermGoal;
