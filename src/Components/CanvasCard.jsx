import "../../styles/canvasCard.css";

export default function CanvasCard(props) {
  return (
    <>
      <div className="canvasContainer d-flex flex-column mx-auto w-100">
        <p className="text-center">{props.title}</p>
        <div className="text-center mx-auto w-100">{props.canvas}</div>
      </div>
    </>
  );
}
