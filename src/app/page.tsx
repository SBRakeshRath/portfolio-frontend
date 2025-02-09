import Head from "next/head";
import HeroSection from "./_components/heroSection/heroSection";
import NavBar from "./_components/nav/nav";
import SkillSection from "./_components/skillSection/skillSection";
import "./homePage.scss";
import ProjectsComponent from "./_components/projects/projectsComponent";
import EducationComponent from "./_components/education/educationComponent";
import ContactComponent from "./_components/contactSection/contctComponent";
import FooterComponent from "./_components/footer/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="homePage">
        <HeroSection />
        <SkillSection />
        <ProjectsComponent />
        <EducationComponent />
        <ContactComponent />
        <FooterComponent />
      </div>
    </>
  );
}
