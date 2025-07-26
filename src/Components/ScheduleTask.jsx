import ScheduleHour from "./ScheduleHour";
import Task from "./Task";

export default function ScheduleTask({ hour, tasksArray }) {
  const tasksForThisHour = tasksArray.filter((task) => {
    if (!task.startTime) return false;
    const taskHour = parseInt(task.startTime.split(":")[0], 10);
    return taskHour === hour;
  });

  return (
    <div className="d-flex align-items-center ">
      <ScheduleHour hour={hour} />
      <div className=" mx-4 w-100 ">
        <div className="tasks-container d-flex flex-row">
          {tasksForThisHour.length > 0 ? (
            tasksForThisHour.map((task, index) => (
              <div
                style={{
                  width: "fit-content",
                  backgroundColor:
                    task.priority === "high"
                      ? "#FEE2E2"
                      : task.priority === "medium"
                      ? "#FEF9C3"
                      : task.priority === "Low"
                      ? "#DCFCE7"
                      : "transparent",
                }}
                className="d-block px-3 pt-1 rounded-2 mx-2"
                key={index}
              >
                <h6>{task.title}</h6>
                <p className="p-0 m-1">
                  {" "}
                  {`Time : ${task.startTime} - ${task.endTime}`}
                </p>
              </div>
            ))
          ) : (
            <p className="text-muted"></p>
          )}
        </div>
      </div>
    </div>
  );
}
