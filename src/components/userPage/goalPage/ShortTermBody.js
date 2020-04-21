import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import moment from "moment";

const ShortTermBody = (props) => {
  const deadline = moment(props.deadline, "YYYY-MM-DD")
    .format("MMM-Do-YYYY")
    .split("-");
  const deadlineDayMonth = deadline[0] + " " + deadline[1];
  const deadlineYear = deadline[2];

  let percentage = Math.floor(
    (props.complete_hours / props.hours_required) * 100
  );
  percentage = percentage || 0;

  return (
    <div className="card--stg" onClick={props.click}>
      <div className="stg__title-date-container">
        <div className="stg__date-container">
          <div className="stg__day-month">{deadlineDayMonth}</div>
          <div className="stg__year">{deadlineYear}</div>
          {/* <button className="link-button--stg-body" onClick={props.click}>
            +
          </button> */}
        </div>
        <h3 className="stg__title">{props.title}</h3>
      </div>
      <div className="stg__info-container">
        <div className="stg__details-container">
          <div className="stg__hours-container">
            <p className="stg__description">{props.description}</p>
            <p className="stg__description">
              {props.complete_hours} out of {props.hours_required} hours
              complete
            </p>
          </div>
        </div>
        <div className="stg__img-section">
          <div className="stg__img-container">
            <CircularProgressbar
              background={true}
              backgroundPadding={5}
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                backgroundColor: "#40b6c5",
                pathColor: "white",
                textColor: "white",
                trailColor: "#40b6c5",
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortTermBody;
