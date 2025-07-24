import React from "react";
import "../../styles/scheduleHour.css";

export default function ScheduleHour(props) {
  return (
    <div>
      <p className="mb-2 hour"> {props.hour} : 00 </p>
    </div>
  );
}
