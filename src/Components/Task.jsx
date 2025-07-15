import "D:/SBME/Web/projects/Day planner ( React )/Day_planner/styles/tasks.css";
import FormSchema from "./FormSchema";
import Tasks from "../../pages/Tasks";

export default function Task(props) {
  return (
    <div
      className="task d-flex flex-row px-4 justify-content-between align-items-center border-1 border rounded-3 pt-3 my-4 "
      style={{
        transition: "0.5s ease all",
        opacity: props.completed == true ? "0.5" : "1",
        boxShadow:
          props.category === "Work"
            ? " -4px 0px #9B87F5"
            : props.category === "Personal"
            ? "-4px 0px #33C3F0"
            : props.category === "Health"
            ? "-4px 0px #7E69AB"
            : props.category === "Learning"
            ? " -4px 0px #D3E4FD"
            : "transparent",
      }}
    >
      <div className="taskDetails d-flex flex-column col-10 col-md-11  text-start">
        <h5 className="text-dark">{props.title}</h5>
        <p>{props.description}</p>
        <div className="timeAndPriority d-flex gap-3 flex-wrap">
          <p
            style={{
              fontSize: "13px",
            }}
          >
            {props.dueDate ? `Due : ${props.dueDate}` : "null"}
          </p>
          <p
            style={{
              fontSize: "13px",
            }}
          >
            {props.startTime || props.endTime
              ? `Time: ${props.startTime} - ${props.endTime}`
              : ""}
          </p>
          <p
            className=" px-1 rounded-1 py-1 "
            style={{
              fontSize: "12px",
              backgroundColor:
                props.priority === "high"
                  ? "#FEE2E2"
                  : props.priority === "medium"
                  ? "#FEF9C3"
                  : props.priority === "Low"
                  ? "#DCFCE7"
                  : "transparent",
              color:
                props.priority === "high"
                  ? "#991B1B"
                  : props.priority === "medium"
                  ? "#A54D4E"
                  : props.priority === "Low"
                  ? "#5C6574"
                  : "inherit",
            }}
          >
            {props.priority}
          </p>
          <p
            className="px-1 rounded-1 py-1 "
            style={{
              fontSize: "12px",
              backgroundColor:
                props.category === "Work"
                  ? "#9B87F5"
                  : props.category === "Personal"
                  ? "#33C3F0"
                  : props.category === "Health"
                  ? "#7E69AB"
                  : props.category === "Learning"
                  ? "#D3E4FD"
                  : "transparent",
              color: props.category === "Learning" ? "black" : "#FFF",
            }}
          >
            {props.category}
          </p>
        </div>
      </div>
      <div className="taskOptions d-flex justify-content-between justify-content-lg-around col-2 col-md-1">
        <i
          style={{ transition: "0.5s ease all" }}
          className="bi bi-trash-fill fs-5 me-2 "
          onMouseEnter={(e) => (e.currentTarget.style.color = "#e97070ff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#2e2d2dff")}
          onClick={() => props.onDeleteTask(props.index)}
        ></i>
        <i
          style={{ transition: "0.5s ease all" }}
          className="bi bi-check-circle fs-5 me-4"
          onMouseEnter={(e) => (e.currentTarget.style.color = "green")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "gray")}
          onClick={() => props.onComplete(props.index)}
        ></i>
      </div>
    </div>
  );
}
