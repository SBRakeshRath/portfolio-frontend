"use client";

import { useMemo } from "react";
import ProjectCard from "./projectCard";
import "./projectsComponent.scss";
import { motion, Transition } from "motion/react";
import Link from "next/link";
import projectData from "@/app/projects/projectData";

const transition: Transition = {
  duration: 0.5,
  // ease: "easeInOut",
};

export default function ProjectsComponent() {
  const topProjects = useMemo(() => {
    return projectData.slice(0, 3);
  }, []);
  return (
    <section className="projectComponent">
      <div className="projectContainerWrapper">
        <h1>Projects</h1>
        <div className="projectCardWrapper">
          {topProjects.map((project, index) => {
            return (
              <motion.div
                key={project.projectTittle}
                className="projectCardWrap"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ...transition, delay: 0.1 * (index + 1) }}
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
        <div className="buttonWrapper">
          <Link href="/projects" className="allProjectButton">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
