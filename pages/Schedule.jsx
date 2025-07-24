import { useState } from "react";
import ScheduleTask from "../src/Components/ScheduleTask";

export default function Schedule({ tasksArray, onComplete, onDeleteTask }) {
  const [currentDate] = useState(new Date());

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const getTasksHours = () => {
    const hours = [];
    for (let i = 0; i < 24; i++) {
      hours.push(
        <ScheduleTask
          key={i}
          hour={i}
          title={``}
          tasksArray={tasksArray}
          onDeleteTask={onDeleteTask}
          onComplete={onComplete}
        />
      );
    }
    return hours;
  };
  return (
    <div className="scheduleContainer bg-light col-lg-8 col-11 rounded-2 p-4 mx-auto my-3 shadow">
      <div className="header d-flex justify-content-between col-12 mb-4">
        <p>
          <strong> Today's Schedule </strong>
        </p>
        <p>
          <strong> {formattedDate} </strong>
        </p>
      </div>
      <div className="d-flex">
        <div className="col-12 tasks">{getTasksHours()}</div>
      </div>
    </div>
  );
}
