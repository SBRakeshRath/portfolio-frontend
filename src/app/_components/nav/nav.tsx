"use client";
import Link from "next/link";
import "./navbar.scss";
import { resumeLink } from "../../../../configs/fronted.env";
import Image from "next/image";
import { motion } from "motion/react";
import { useRef } from "react";

export default function NavBar() {
  const mobileNavRef = useRef<HTMLDivElement>(null);
  return (
    <header>
      <nav>
        <div className="left"></div>
        <div className="right">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          <Link href="/skills">Skill</Link>
          <Link href="/projects">Projects</Link>
          <a href={resumeLink} className="resumeButton download">
            Resume
          </a>
          <div
            className="hamBergerMenu"
            onClick={() => {
              mobileNavRef.current?.classList.toggle("active");
            }}
          >
            <Image
              src="https://img.icons8.com/ios/50/000000/menu--v1.png"
              alt="menu"
              width={50}
              height={50}
            />
          </div>
        </div>
      </nav>

      <motion.nav className="mobileNav" ref={mobileNavRef}>
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        <Link href="/skills">Skill</Link>
        <Link href="/projects">Projects</Link>
      </motion.nav>
    </header>
  );
}
