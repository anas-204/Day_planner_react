import notFoundImage from "../src/assets/404-error.jpg";

export default function NotFound() {
  return (
    <div>
      <img src={notFoundImage} alt="Page not found" />
    </div>
  );
}
