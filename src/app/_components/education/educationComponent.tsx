"use client";
import EducationCard from "./educationCard";
import "./educationComponent.scss";
import { motion } from "motion/react";

export default function EducationComponent() {
  return (
    <section className="educationComponent">
      <div className="educationComponentWrapper">
        <div className="col">
          <motion.div
            className="motionCont"
            initial={{
              transform: "rotate(0deg)",
            }}
            whileInView={{
              transform: "rotate(-12deg)",
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <EducationCard
              degreeName="Matriculation (10th)"
              instituteName="Talakusuma Govindpur High School"
              mark="90%"
              duration="2017 Passout"
            />
          </motion.div>
          <motion.div
            className="motionCont"
            initial={{
              transform: "rotate(0deg)",
            }}
            whileInView={{
              transform: "rotate(12deg)",
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <EducationCard
              degreeName="Higher Secondary (10+2)"
              instituteName="Shakti Higher Secondary School"
              mark="74%"
              duration="2017-2019"
            />
          </motion.div>
        </div>
        <div className="col">
          <h1>Academics</h1>
        </div>
        <div className="col">
          <motion.div
            className="motionCont"
            initial={{
              transform: "rotate(0deg)",
            }}
            whileInView={{
              transform: "rotate(12deg)",
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <EducationCard
              degreeName="Graduation (Physics)"
              instituteName="Sakti Sai Degree College"
              mark="8.49 CGPA"
              duration="2020 - 2023"
            />
          </motion.div>
          <motion.div
            className="motionCont"
            initial={{
              transform: "rotate(0deg)",
            }}
            whileInView={{
              transform: "rotate(-12deg)",
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <EducationCard
              degreeName="Master of Computer Application"
              instituteName="KIIT University"
              mark="8.88 CGPA"
              duration="2023 - 2025 (Present)"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
