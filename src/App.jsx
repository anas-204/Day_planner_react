import { Routes, Route } from "react-router-dom";
import Tasks from "../pages/Tasks";
import Schedule from "../pages/Schedule";
import Statistics from "../pages/Statistics";
import NotFound from "../pages/NotFound";
import { useState, useEffect, useMemo } from "react";
import "./App.css";
import Login from "../pages/Login";
import { toast } from "react-toastify";
import Register from "./../pages/Register";
import { ArcElement } from "chart.js";

function App() {
  const [tasksArray, setTasksArray] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [showForm, setShowForm] = useState(false);

  const statistics = useMemo(() => {
    return tasksArray.reduce(
      (stats, task) => {
        stats.total++;
        if (task.completed) stats.completed++;
        if (task.priority === "Low") stats.low++;
        if (task.priority === "medium") stats.medium++;
        if (task.priority === "high") stats.high++;
        if (task.category === "Work") stats.work++;
        if (task.category === "Personal") stats.personal++;
        if (task.category === "Health") stats.health++;
        if (task.category === "Learning") stats.learning++;

        return stats;
      },
      {
        total: 0,
        completed: 0,
        low: 0,
        medium: 0,
        high: 0,
        work: 0,
        personal: 0,
        health: 0,
        learning: 0,
      }
    );
  }, [tasksArray]);

  const completionPercentage = useMemo(() => {
    return statistics.total > 0
      ? `${((statistics.completed / statistics.total) * 100).toFixed(1)}%`
      : "0%";
  }, [statistics]);

  const handleAddTask = (newTask) => {
    const formattedTask = {
      ...newTask,
      startTime: newTask.startTime || "",
      endTime: newTask.endTime || "",
      priority: newTask.priority || " ",
    };

    const updatedTasks = [...tasksArray, formattedTask];
    setTasksArray(updatedTasks);
    toast.success("Task added successfully!");
    setShowForm(false);
  };

  const onDeleteTask = (taskIndex) => {
    const updatedTasks = tasksArray.filter((_, index) => index !== taskIndex);
    setTasksArray(updatedTasks);
  };

  const onComplete = (taskIndex) => {
    const updatedTasks = tasksArray.map((task, index) =>
      index === taskIndex ? { ...task, completed: true } : task
    );
    setTasksArray(updatedTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
  }, [tasksArray]);

  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
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
      <Route
        path="/statistics"
        element={
          <Statistics
            totalTasks={statistics.total}
            completedTasks={statistics.completed}
            pendingTasks={statistics.total - statistics.completed}
            completionPercentage={completionPercentage}
            workTasks={statistics.work}
            learningTasks={statistics.learning}
            healthTasks={statistics.health}
            personalTasks={statistics.personal}
            highPriorityTasks={statistics.high}
            mediumPriorityTasks={statistics.medium}
            lowPriorityTasks={statistics.low}
          />
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
