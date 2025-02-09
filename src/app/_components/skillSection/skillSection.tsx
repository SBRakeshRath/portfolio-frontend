import SkillCard from "./skillCard";
import "./skillSection.scss";
export default function SkillSection() {
  return (
    <section className="skillSection">
      <div className="row">
        <SkillCard
          tittle="Programming Languages"
          skillsArray={[
            {
              name: "TypeScript",
              icon: "https://img.icons8.com/color/48/000000/typescript.png",
            },
            {
              name: "JavaScript",
              icon: "https://img.icons8.com/color/48/000000/javascript.png",
            },
            {
              name: "C++ (DSA)",
              icon: "https://img.icons8.com/color/48/000000/python.png",
            },
            {
              name: "Python Basics",
              icon: "https://img.icons8.com/color/48/000000/python.png",
            },
            {
              name: "Java Basics",
              icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png",
            },
          ]}
        />
        <h1>Skills I Have</h1>
        <SkillCard
          tittle="Cloud Technology"
          skillsArray={[
            {
              name: "GCP",
              icon: "https://img.icons8.com/color/48/000000/google-cloud-platform.png",
            },
            {
              name: "Netlify",
              icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png",
            },
            {
              name: "Firebase",
              icon: "https://img.icons8.com/color/48/000000/firebase.png",
            },
            {
              name: "Docker Basics",
              icon: "https://img.icons8.com/color/48/000000/docker.png",
            },
            {
              name: "AWS Basics",
              icon: "https://img.icons8.com/color/48/000000/amazon-web-services.png",
            },
          ]}
        />
      </div>
      <div className="row">
        <SkillCard
          tittle="Web Technologies"
          skillsArray={[
            {
              name: "React",
              icon: "https://img.icons8.com/office/50/react.png",
            },
            {
              name: "Node JS",
              icon: "https://img.icons8.com/color/48/000000/nodejs.png",
            },
            {
              name: "Express JS",
              icon: "https://img.icons8.com/color/48/000000/express.png",
            },
            {
              name: "React Query",
              icon: "https://img.icons8.com/officel/80/react.png",
            },
            {
              name: "Next JS Basics",
              icon: "https://img.icons8.com/color/48/000000/next.png",
            },
          ]}
        />
        <SkillCard
          tittle="Database"
          skillsArray={[
            {
              name: "MongoDB",
              icon: "https://img.icons8.com/color/48/000000/mongodb.png",
            },
            {
              name: "PostgreSQL",
              icon: "https://img.icons8.com/color/48/000000/postgreesql.png",
            },
            {
              name: "Firebase",
              icon: "https://img.icons8.com/color/48/000000/firebase.png",
            },
            {
              name: "MySQL",
              icon: "https://img.icons8.com/color/48/000000/mysql-logo.png",
            },
            {
              name: "SQLite",
              icon: "https://img.icons8.com/ios/50/sqlite.png",
            },
          ]}
        />
        <SkillCard
          tittle="Tools"
          skillsArray={[
            {
              name: "Git",
              icon: "https://img.icons8.com/color/48/000000/git.png",
            },

            {
              name: "VS Code",
              icon: "https://img.icons8.com/color/48/000000/visual-studio-code-2019.png",
            },
            {
              name: "Postman",
              icon: "https://img.icons8.com/dusk/50/postman-api.png",
            },
            {
              name: "Figma Basics",
              icon: "https://img.icons8.com/color/48/000000/figma.png",
            },
            {
              name: "GitHub",
              icon: "https://img.icons8.com/color/48/000000/github--v1.png",
            },
          ]}
        />
      </div>
    </section>
  );
}
