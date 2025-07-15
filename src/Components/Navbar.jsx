import { NavLink } from "react-router-dom";
import "D:/SBME/Web/projects/Day planner ( React )/Day_planner/styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg my-4  ">
      <div className="container justify-content-center d-flex  ">
        <div className="navbar-nav rounded-3 px-1 py-1 d-flex flex-row">
          <NavLink className="nav-link" to="Tasks">
            Tasks
          </NavLink>
          <NavLink className="nav-link" to="Schedule">
            Schedule
          </NavLink>
          <NavLink className="nav-link" to="Statistics">
            Statistics
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
