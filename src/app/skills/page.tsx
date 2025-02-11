"use client";

import FooterComponent from "../_components/footer/footer";
import NavBar from "../_components/nav/nav";
import SkillCardComponent from "./skillCardComponent";
import skillDataArray from "./skillData";
import "./skillPageStyle.scss";
import { motion } from "motion/react";

export default function () {
  return (
    <div className="skillsPage">
      <NavBar />
      <div className="skillCardsContainer">
        {skillDataArray.map((skill, index) => {
          return (
            <motion.div
              key={skill.name}
              initial={{
                opacity: 0,
                backdropFilter: "blur(10px)",
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                backdropFilter: "blur(0px)",
                scale: 1,
              }}
              transition={{
                delay: 0.1 * index,
              }}
              viewport={{
                once: true,
              }}
            >
              <SkillCardComponent name={skill.name} icon={skill.icon} />
            </motion.div>
          );
        })}
      </div>
      <FooterComponent />
    </div>
  );
}
