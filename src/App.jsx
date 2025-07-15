import { Routes, Route } from "react-router-dom";
import Tasks from "../pages/Tasks";
import Schedule from "../pages/Schedule";
import Statistics from "../pages/Statistics";
import NotFound from "../pages/NotFound";
import "./App.css";
import Login from "../pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
