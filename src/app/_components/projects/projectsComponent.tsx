"use client";

import ProjectCard from "./projectCard";
import "./projectsComponent.scss";
import { motion, Transition } from "motion/react";
import dloImg from "./images/dlo-image.png";
import gngImg from "./images/gng-image.png";
import ovdImg from "./images/ovd-image.png";
import Link from "next/link";

const transition: Transition = {
  duration: 0.5,
  // ease: "easeInOut",
};

export default function ProjectsComponent() {
  return (
    <section className="projectComponent">
      <div className="projectContainerWrapper">
        <h1>Projects</h1>
        <div className="projectCardWrapper">
          <motion.div
            className="projectCardWrap"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ...transition }}
          >
            <ProjectCard
              projectTittle="Youtube Video Downloader"
              projectImage={ovdImg}
              description="A web and Telegram bot for downloading YouTube videos in any quality (video and audio)"
              tags={[
                "React JS",
                "Node JS",
                "Cloud Storage",
                "FFMPEG",
                "Firebase",
                "FireStore",
              ]}
              link="https://ovd.pixismith.com"
              github="https://github.com/SBRakeshRath/online-video-downloader"
            />
          </motion.div>
          <motion.div
            className="projectCardWrap"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ...transition, 
              delay: 0.2
             }}
          >
            <ProjectCard
              projectTittle="Guessing Number Game"
              projectImage={gngImg}
              description="A web based game where the user has to guess the number between which is average of all guessed numbers."
              tags={[
                "API Rate limiting",
                "Vue JS",
                "Node JS",
                "Express JS",
                "API Gate Way",
                "Firebase",
              ]}
              link="https://gng.pixismith.com/"
              github="https://github.com/SBRakeshRath/guessing-number-game-frontend"
            />
          </motion.div>
          <motion.div
            className="projectCardWrap"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ...transition, delay: 0.3 }}
          >
            <ProjectCard
              projectTittle="Database less OTP"
              projectImage={dloImg}
              description="A concept of generating, storing and validating OTP without need of a Database."
              tags={[
                "Vue JS",
                "Node JS",
                "JWT",
                "HMAC",
                "Cloud Run",
                "Firebase",
                "FireStore",
              ]}
              link="https://db-less-otp.netlify.app/"
              github="https://github.com/SBRakeshRath/DB-less-OTP-Frontend"
            />
          </motion.div>
        </div>
        <div className="buttonWrapper">
          <Link href="/projects" className="allProjectButton">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
