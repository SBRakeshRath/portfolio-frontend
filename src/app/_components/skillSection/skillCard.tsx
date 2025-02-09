"use client";
type propsType = {
  tittle: string;
  skillsArray: Array<{ name: string; icon: string }>;
};

import Image from "next/image";
import Tilt from "react-parallax-tilt";

export default function SkillCard({ tittle, skillsArray }: propsType) {
  return (
    <Tilt
      tiltReverse={true}
      glareEnable={true}
      glareColor={"#000"}
      glarePosition={"all"}
      glareBorderRadius={"10px"}
      glareMaxOpacity={0.35}
    >
      <div className="skillCards">
        <h3>{tittle}</h3>
        <div className="skillsContainer">
          {skillsArray.map((skill, index) => (
            <div key={index} className="skill">
              <Image
                width={48}
                height={48}
                src={skill.icon}
                alt={skill.name.toString()}
              />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Tilt>
  );
}
