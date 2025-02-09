import Image from "next/image";
import "./photoComponent.scss";
import profilePic from "./profile pic.jpg";
export default function PhotoComponent() {
  return (
    <div className="photoComponentWrapper">
      <div className="row">
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div className="row image-row">
        {/* <img
          src="https://storage.googleapis.com/sbrr-portfolio-public-access-assets/profile%20pic.jpg"
          alt="placeholder"
        /> */}
        <Image
          src={profilePic}
          alt="profile picture"
          width={200}
          height={200}
        />
      </div>
      <div className="row">
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
}
