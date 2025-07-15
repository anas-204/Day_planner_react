import { useState } from "react";
import "../../styles/header.css";

export default function Header() {
  const [currentDate] = useState(new Date());
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="header-container d-flex flex-row justify-content-around align-items-center">
        <div className="left-pt me-5">
          <h2> Day Planner </h2>
          <p className="left-pt-p">{formattedDate}</p>
        </div>
        <div className="right-pt ms-5">
          <h4>Organize your day</h4>
          <p className="right-pt-p">Plan, track, and achieve</p>
        </div>
      </div>
    </>
  );
}
