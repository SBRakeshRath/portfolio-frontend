import ContactComponent from "../_components/contactSection/contctComponent";
import FooterComponent from "../_components/footer/footer";
import NavBar from "../_components/nav/nav";
import "./contactPageStyle.scss"

export default function () {
  return (
    <div className="contactPage">
      <NavBar />
      <div className="contactComponent">
        <ContactComponent />
      </div>
      <FooterComponent />
    </div>
  );
}
