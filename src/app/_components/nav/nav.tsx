import Link from "next/link";
import "./navbar.scss"
import { resumeLink } from "../../../../configs/fronted.env";

export default function NavBar() {
  return (
    <header>
      <nav>
        <div className="left"></div>
        <div className="right">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          <Link href="/skill">Skill</Link>
          <Link href="/projects">Projects</Link>
          <a href={resumeLink} className="resumeButton download">
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
