import "../../styles/addtaskbut.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function AddTaskBut({ onClick, visible = true }) {
  if (!visible) return null;

  return (
    <button className="btn" onClick={onClick}>
      Add Task
      <i className="bi bi-plus-circle mx-2"></i>
    </button>
  );
}
