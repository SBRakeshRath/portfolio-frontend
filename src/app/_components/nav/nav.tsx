"use client";
import Link from "next/link";
import "./navbar.scss";
import { resumeLink } from "../../../../configs/fronted.env";
import Image from "next/image";
import { motion } from "motion/react";
import { useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar() {
  const path = usePathname();

  const mobileNavRef = useRef<HTMLDivElement>(null);
  return (
    <header>
      <nav>
        <div className="left"></div>
        <div className="right">
          <Link className={path === "/" ? "activeLink" : ""} href="/">
            Home
          </Link>
          <Link
            href="/contact"
            className={path === "/contact" ? "activeLink" : ""}
          >
            Contact
          </Link>
          <Link href="/about" className={path === "/about" ? "activeLink" : ""}>
            About
          </Link>
          <Link
            href="/skills"
            className={path === "/skills" ? "activeLink" : ""}
          >
            Skill
          </Link>
          <Link
            href="/projects"
            className={path === "/projects" ? "activeLink" : ""}
          >
            Projects
          </Link>
          <Link
            href="https://medium.com/@sbrakeshrath"
            className={path === "https://medium.com/@sbrakeshrath" ? "activeLink" : ""}
          >
            Blog
          </Link>
          <Link
            href="/dsa"
            className={path === "/dsa" ? "activeLink" : ""}
          >
            Dsa
          </Link>
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
        <Link href="/" className={path === "/" ? "activeLink" : ""}>
          Home
        </Link>
        <Link
          href="/contact"
          className={path === "/contact" ? "activeLink" : ""}
        >
          Contact
        </Link>
        <Link href="/about" className={path === "/about" ? "activeLink" : ""}>
          About
        </Link>
        <Link href="/skills" className={path === "/skills" ? "activeLink" : ""}>
          Skill
        </Link>
        <Link
          href="/projects"
          className={path === "/projects" ? "activeLink" : ""}
        >
          Projects
        </Link>
        <Link
          href="/dsa"
          className={path === "/dsa" ? "activeLink" : ""}
        >
          Dsa
        </Link>
      </motion.nav>
    </header>
  );
}
