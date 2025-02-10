import Link from "next/link";
import { resumeLink } from "../../../../../../configs/fronted.env";
import "./textComponent.scss";
import fullStackText from "./Full Stack Developer.svg";
import Image from "next/image";

export default function TextComponent() {
  return (
    <div className="textComponent">
      <div className="text">
        <Image width="500" src={fullStackText} alt="Full Stack Developer" />
      </div>
      <div className="buttonContainer">
        <Link href="/#contact" className="contactLink">
          Contact me
        </Link>
        <a href={resumeLink} className="resumeLink" download>
          Resume
        </a>
      </div>
    </div>
  );
}
