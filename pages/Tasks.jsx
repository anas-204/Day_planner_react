import AddTaskBut from "./../src/Components/AddTaskBut";
import "../styles/tasks.css";
import Task from "../src/Components/Task";
import FormSchema from "../src/Components/FormSchema";
import { ToastContainer } from "react-toastify";

export default function Tasks({
  tasksArray,
  handleAddTask,
  onComplete,
  onDeleteTask,
  setShowForm,
  showForm,
}) {
  return (
    <div className="taskContainer bg-light col-lg-8 col-11 rounded-2 p-4 mx-auto">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <div className="taskContainerHeader d-flex justify-content-between">
        <h3>
          <strong> Tasks </strong>
        </h3>
        <AddTaskBut onClick={() => setShowForm(true)} visible={!showForm} />{" "}
      </div>
      <div className="taskContainerBody px-3">
        {showForm && (
          <FormSchema
            onAddTask={handleAddTask}
            onCancel={() => setShowForm(false)}
          />
        )}
        {tasksArray.length > 0 ? (
          tasksArray.map((task, index) => (
            <Task
              key={index}
              index={index}
              title={task.title || "Untitled Task"}
              description={task.description}
              priority={task.priority}
              category={task.category}
              dueDate={task.dueDate}
              startTime={task.startTime}
              endTime={task.endTime}
              onDeleteTask={onDeleteTask}
              onComplete={onComplete}
              completed={task.completed}
            />
          ))
        ) : tasksArray.length > 0 ? (
          tasksArray.map((task, index) => (
            <Task
              key={index}
              index={index}
              title={task.title || "Untitled Task"}
              description={task.description}
              priority={task.priority}
              category={task.category}
              dueDate={task.dueDate}
              startTime={task.startTime}
              endTime={task.endTime}
              onDeleteTask={onDeleteTask}
              onComplete={onComplete}
              completed={task.completed}
            />
          ))
        ) : !showForm ? (
          <p>No tasks yet. Add your first task!</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
