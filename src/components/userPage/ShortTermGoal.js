import React from "react";
import Time from "./Time";
import { useSelector } from "react-redux";
import { selectByKey } from "../../selectors/goals";
import TimeForm from './TimeForm'
import { startAddTime } from '../../actions/time'

const ShortTermGoal = props => {
  const allTimes = useSelector(state => state.data.entities.times)

  const matchedTimes = selectByKey(allTimes, props.timeallocation_set)

  return (
    <div>
      <p>- {props.description}</p>
      <ol>
        {matchedTimes.map(time => <Time key={time.id} {...time}/>)}
      </ol>
      <TimeForm onSubmit={startAddTime} goalID={props.id}/>
    </div>
  );
};

export default ShortTermGoal;
