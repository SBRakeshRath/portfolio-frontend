import "./aboutPage.scss";
import NavBar from "../_components/nav/nav";
import aboutPageProfilePhoto from "./aboutPageAsset/aboutPageProfilePhoto.png";
import Image from "next/image";
import FooterComponent from "../_components/footer/footer";

export default function About() {
  return (
    <div className="aboutPage">
      <NavBar />
      <div className="aboutMeSection">
        <div className="image">
          <div className="imageWrapper">
            <Image src={aboutPageProfilePhoto} alt="profile photo" fill />
          </div>
        </div>
        <div className="text">
          <h1>Hi,</h1>
          <p>
            &emsp; &emsp;I am S B Rakesh Rath a full stack developer from
            Bhubaneswar, Odisha, India looking forward to work with a company
            that offers me a consistently positive and professional atmosphere
            to learn and implement new technologies for the betterment of the
            company and myself. I am a quick learner and a team player with good
            communication skills. I am passionate about coding and I am always
            eager to learn new things.
          </p>
        </div>
      </div>
      <div className="myExperience">
        <h1>Experience</h1>
        <div className="experience">
          <div className="experienceCard">
            <h2>Full Stack Developer Intern</h2>
            <div className="row">
              <a href="https://therankshell.com/">
                <h3>Rankshell</h3>
              </a>
              <p>April 2024 - August 2024</p>
            </div>

            <ul>
              <li>
                Spearheaded the full-stack development and deployment of Four
                web applications for Rankshell clients within a condensed
                4.5-month period.
              </li>
              <li>
                Led the development and deployment of full-stack web
                applications for clients, handling all aspects from backend
                development to frontend design and web hosting.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
