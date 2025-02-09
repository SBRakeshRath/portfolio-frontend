import "./heroSection.scss";
import NavBar from "../nav/nav";
import HeroSectionMainComponent from "./heroSectionMainComponent/heroSectionMainComponent";
export default function HeroSection() {
  return (
    <section className="heroSection">
      <NavBar />
      <HeroSectionMainComponent />
    </section>
  );
}
