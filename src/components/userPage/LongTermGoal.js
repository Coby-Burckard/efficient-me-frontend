import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const LongTermGoal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  let percentage = Math.floor((props.complete_hours / props.total_hours) * 100);
  percentage = isNaN(percentage) ? 0 : percentage;

  const history = useHistory();

  const handleViewClick = () => {
    history.push(`/goalpage/${props.id}`);
  };

  const handleEditClick = () => {
    setIsOpen(true);
  };

  console.log(props);
  return (
    <div className="card" onClick={handleViewClick}>
      <div className="ltg__top-row" style={{ backgroundColor: props.color }}>
        <CircularProgressbar
          background={true}
          backgroundPadding={5}
          className="ltg__progress"
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            backgroundColor: props.color,
            pathColor: "white",
            textColor: "white",
            trailColor: props.color,
          })}
        />
      </div>
      <div className="ltg__bottom-row">
        <h2 className="ltg__title">{props.title}</h2>
        <p className="ltg__description">{props.description}</p>
      </div>
    </div>
  );
};

export default LongTermGoal;
