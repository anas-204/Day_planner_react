import "../../styles/statisticsCard.css";

export default function StatisticsCard(props) {
  return (
    <div className="statisticsCard">
      <h6>{props.title}</h6>
      <p>{props.text}</p>
    </div>
  );
}
