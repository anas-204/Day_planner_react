import { Routes, Route } from "react-router-dom";
import Tasks from "../pages/Tasks";
import Schedule from "../pages/Schedule";
import Statistics from "../pages/Statistics";
import NotFound from "../pages/NotFound";
import { useState, useEffect } from "react";
import "./App.css";
import Login from "../pages/Login";
import { toast } from "react-toastify";
import Task from "./Components/Task";

function App() {
  const [tasksArray, setTasksArray] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [showForm, setShowForm] = useState(false);

  const handleAddTask = (newTask) => {
    const formattedTask = {
      ...newTask,
      startTime: newTask.startTime || "",
      endTime: newTask.endTime || "",
      priority: newTask.priority || " ",
    };

    const updatedTasks = [...tasksArray, formattedTask];
    setTasksArray(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    toast.success("Task added successfully!");
    setShowForm(false);
    console.log(formattedTask);
  };

  const onDeleteTask = (taskIndex) => {
    const updatedTasks = tasksArray.filter((_, index) => index !== taskIndex);
    setTasksArray(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const onComplete = (taskIndex) => {
    const updatedTasks = tasksArray.map((task, index) =>
      index === taskIndex ? { ...task, completed: true } : task
    );
    setTasksArray(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
  }, [tasksArray]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/tasks"
        element={
          <Tasks
            tasksArray={tasksArray}
            handleAddTask={handleAddTask}
            onComplete={onComplete}
            onDeleteTask={onDeleteTask}
            setShowForm={setShowForm}
            showForm={showForm}
          />
        }
      />
      <Route
        path="/schedule"
        element={
          <Schedule
            onDeleteTask={onDeleteTask}
            onComplete={onComplete}
            tasksArray={tasksArray}
          />
        }
      />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
