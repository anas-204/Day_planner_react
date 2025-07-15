import { useState } from "react";
import AddTaskBut from "./../src/Components/AddTaskBut";
import "D:/SBME/Web/projects/Day planner ( React )/Day_planner/styles/tasks.css";
import Task from "../src/Components/Task";
import FormSchema from "../src/Components/FormSchema";

export default function Tasks() {
  const [tasksArray, setTasksArray] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleAddTask = (newTask) => {
    setTasksArray([...tasksArray, newTask]);
    setShowForm(false);
  };
  const onDeleteTask = (taskIndex) => {
    setTasksArray(tasksArray.filter((_, index) => index !== taskIndex));
  };
  const onComplete = (taskIndex) => {
    setTasksArray(
      tasksArray.map((task, index) =>
        index === taskIndex ? { ...task, completed: true } : task
      )
    );
  };
  return (
    <div className="taskContainer bg-light col-lg-8 col-11 rounded-2 p-4 mx-auto">
      <div className="taskContainerHeader d-flex justify-content-between">
        <h3>
          <strong> Tasks </strong>
        </h3>
        <AddTaskBut onClick={() => setShowForm(true)} visible={!showForm} />
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
