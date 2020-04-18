import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const ShortTermBody = (props) => {
  let percentage = Math.floor(
    (props.complete_hours / props.hours_required) * 100
  );
  percentage = percentage || 0;

  return (
    <div className="card--stg">
      <div className="stg__text-container">
        <h3 className="stg__title">{props.title}</h3>
        <div className="stg__details-container">
          <div className="stg__hours-container">
            <p className="stg__description">{props.description}</p>
            {/* <p className="stg__completed">
              Complete - {props.complete_hours} hrs
            </p> */}
            <p className="stg__total">
              Goal {"                  "}
              {props.hours_required} hrs
            </p>
          </div>
        </div>
      </div>
      <div className="stg__img-section">
        <div className="stg__img-container">
          <CircularProgressbar
            background={true}
            backgroundPadding={5}
            value={percentage}
            text={`${props.complete_hours} hrs`}
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
  );
};

export default ShortTermBody;
