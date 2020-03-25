import React from "react";
import DeleteTimeButton from './DeleteTimeButton'
import { startEditTime } from '../../actions/time'
import TimeForm from './TimeForm'

const Time = props => {
  console.log(props)
  return (
    <div>
      <p>{props.description}</p>
      <TimeForm onSubmit={startEditTime} goalID={props.goal} {...props} />
      <DeleteTimeButton id={props.id} goalID={props.goal}/>
    </div>
  );
};

export default Time;
