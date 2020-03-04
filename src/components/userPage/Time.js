import React from "react";
import DeleteTimeButton from './DeleteTimeButton'

const Time = props => {
  return (
    <div>
      <p>{props.description}</p>
      <DeleteTimeButton id={props.id} goalID={props.goal}/>
    </div>
  );
};

export default Time;
