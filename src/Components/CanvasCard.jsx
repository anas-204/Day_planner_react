import "../../styles/canvasCard.css";

export default function CanvasCard(props) {
  return (
    <>
      <div className="canvasContainer d-flex flex-column mx-auto">
        <p className="text-center">{props.title}</p>
        <div className="text-center mx-auto">{props.canvas}</div>
      </div>
    </>
  );
}
