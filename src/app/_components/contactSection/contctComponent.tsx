import Image from "next/image";
import Link from "next/link";
import "./contactComponent.scss";

export default function ContactComponent() {
  return (
    <section className="ContactSection" id = "contact">
      <div className="contactSectionWrapper">
        <h1>Contact me</h1>
        <div className="contactDetailsAndFormWrapper">
          <div className="contactDetails">
            <div className="email">work.sbrakeshrath@gmail.com</div>
            <div className="phoneNumber">+91 9337691832</div>
            <div className="socialLinks">
              <Link href="https://in.linkedin.com/in/s-b-rakesh-rath-0bb336215">
                <Image
                  src="https://img.icons8.com/color/48/000000/linkedin.png"
                  alt="linkedin"
                  width={48}
                  height={48}
                />
              </Link>
              <Link href="https://www.instagram.com/s.b.rakeshrath/">
                <Image
                  src="https://img.icons8.com/color/48/000000/instagram-new.png"
                  alt="instagram"
                  width={48}
                  height={48}
                />
              </Link>
              <Link href="https://github.com/SBRakeshRath">
                <Image
                  src="https://img.icons8.com/color/48/000000/github--v1.png"
                  alt="github"
                  width={48}
                  height={48}
                />
              </Link>
            </div>
          </div>
          <form className="contactForm">
            <input type="text" name="name" id="name" placeholder="Enter Name" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
            />
            <input
              type="number"
              name="number"
              id="number"
              placeholder="Enter Number"
            />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter Subject"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Enter Message"
              // 4 row visible
              rows={4}
            ></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </section>
  );
}
