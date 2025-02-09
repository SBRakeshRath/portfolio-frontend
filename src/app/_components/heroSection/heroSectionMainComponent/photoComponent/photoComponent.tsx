
import "./photoComponent.scss"
export default function PhotoComponent() {
  return (
    <div className="photoComponentWrapper">
      <div className="row">
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div className="row image-row">
        <img
          src="https://storage.googleapis.com/sbrr-portfolio-public-access-assets/profile%20pic.jpg"
          alt="placeholder"
        />
      </div>
      <div className="row">
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
}
