import React from "react";
import moment from "moment";
import EditTime from "./EditTime";

const Time = (props) => {
  const date = moment(props.date_completed, "YYYY-MM-DD")
    .format("MMM-Do-YYYY")
    .split("-");
  const dayMonth = date[0] + " " + date[1];
  const year = date[2];

  return (
    <div className="time">
      <div className="time__title-date-container">
        <div className="time__date-container">
          <div className="time__day-month">{dayMonth}</div>
          <div className="time__year">{year}</div>
        </div>
        <div className="time__title-edit-container">
          <h4 className="time__title">
            {props.time_speant}hrs - {props.title}
          </h4>
          <EditTime {...props} goalID={props.goal} />
        </div>
      </div>
      <div className="time__info-container">
        <div className="time__description">{props.description}</div>
      </div>
    </div>
  );
};

export default Time;
