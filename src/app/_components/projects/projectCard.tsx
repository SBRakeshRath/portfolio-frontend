import Image, { StaticImageData } from "next/image";
import "./projectCard.scss";

type propsType = {
  projectTittle: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
  projectImage: StaticImageData;
};

export default function ProjectCard(props: propsType) {
  return (
    <div className="projectCard">
      <div className="image">
        <Image
          src={props.projectImage}
          alt={"Image of " + props.projectTittle}
          fill
        />
      </div>
      <div className="projectInfo">
        <h3>{props.projectTittle}</h3>
        <p className="description">{props.description}</p>
        <div className="tags">
          {props.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="buttons">
          <a href={props.link} target="_blank" rel="noreferrer" className="visitLink">
            Visit
          </a>
          {props.github === "" ? null : (
            <a href={props.github} target="_blank" rel="noreferrer" className="githubLink">
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
