"use client";
import NavBar from "../_components/nav/nav";
import ProjectCard from "../_components/projects/projectCard";
import projectData from "./projectData";
import { motion, Transition } from "motion/react";
import "./projectsStyle.scss";
import FooterComponent from "../_components/footer/footer";

const transition: Transition = {
  duration: 0.5,
};

export default function Projects() {
  return (
    <div className="projectsPage">
      <NavBar />
      <div className="projectsCardContainer">
        {projectData.map((project) => {
          return (
            <motion.div
              key={project.projectTittle}
              className="projectCardWrap"
              initial={{
                opacity: 0,
                scale: 0.5,
                backdropFilter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                backdropFilter: "blur(0px)",
              }}
              transition={{ ...transition }}
              viewport={{
                once: true,
              }}
            >
              <ProjectCard
                projectTittle={project.projectTittle}
                projectImage={project.projectImage}
                description={project.description}
                tags={project.tags}
                link={project.link}
                github={project.github}
              />
            </motion.div>
          );
        })}
      </div>
      <FooterComponent />
    </div>
  );
}
