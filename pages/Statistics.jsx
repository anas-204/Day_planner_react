import CanvasCard from "../src/Components/CanvasCard";
import StatisticsCard from "../src/Components/StatisticsCard";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

export default function Statistics(props) {
  ChartJS.register(ArcElement, Tooltip, Legend);
  console.log("Priority props:", {
    low: props.lowPriorityTasks,
    medium: props.mediumPriorityTasks,
    high: props.highPriorityTasks,
  });
  const priorityChartData = {
    labels: ["Low", "Medium", "High"],
    datasets: [
      {
        label: "Tasks by Priority",

        data: [
          props.lowPriorityTasks,
          props.mediumPriorityTasks,
          props.highPriorityTasks,
        ],
        backgroundColor: ["#10B981", "#F59E0B", "#EF4444"],
        borderColor: "transparent",
        borderWidth: 1,
        hoverBackgroundColor: ["#0E9F74", "#D97706", "#DC2626"],
        hoverBorderColor: "#fff",
        hoverBorderWidth: 2,
        borderRadius: 4,
      },
    ],
  };

  const priorityChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const value = context.raw || 0;
            const percentage =
              total > 0 ? Math.round((value / total) * 100) : 0;
            return `${context.label}: ${value} (${percentage}%)`;
          },
        },
      },
      title: {
        display: true,
        text: "Task Priority Distribution",
        font: {
          size: 16,
        },
      },
    },
    maintainAspectRatio: false,
  };

  const categoryChartData = {
    labels: ["Work", "Personal", "Health", "Learning"],
    datasets: [
      {
        label: "Tasks by Category",
        data: [
          props.workTasks,
          props.personalTasks,
          props.healthTasks,
          props.learningTasks,
        ],
        backgroundColor: ["#E5DEFF", "#9B87F5", "#7E69AB", "#33C3F0"],
        borderColor: "transparent",
        borderWidth: 1,
        hoverBackgroundColor: ["#D0C6FF", "#8A72F3", "#6D58A0", "#29B0E0"],
        hoverBorderColor: "#fff",
        hoverBorderWidth: 2,
      },
    ],
  };

  return (
    <div className="statisticsContainer bg-light col-lg-8 col-11 rounded-2 p-4 mx-auto my-3 shadow">
      <h4>Tasks Statistics</h4>
      <div className="cards d-flex flex-wrap justify-content-evenly my-5">
        <StatisticsCard title="Total Tasks" text={props.totalTasks} />
        <StatisticsCard title="Completed" text={props.completedTasks} />
        <StatisticsCard title="Pending" text={props.pendingTasks} />
        <StatisticsCard
          title="Completion Rate"
          text={props.completionPercentage}
        />
      </div>
      <div className="canvas d-flex gap-2 flex-wrap">
        <CanvasCard
          title="Tasks by Priority"
          canvas={
            <div style={{ height: "300px", width: "100%" }}>
              <Pie data={priorityChartData} options={priorityChartOptions} />
            </div>
          }
        />
        <CanvasCard
          title="Tasks by Category"
          canvas={
            <div style={{ height: "300px", width: "100%" }}>
              <Pie data={categoryChartData} options={priorityChartOptions} />
            </div>
          }
        />
      </div>
    </div>
  );
}
