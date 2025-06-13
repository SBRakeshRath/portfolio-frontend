import { StaticImageData } from "next/image";
import dloImg from "./assets/dlo-Image.webp";
import gngImg from "./assets/gng-Image.webp";
import ovdImg from "./assets/ovd-Image.webp";
import shooterGameImg from "./assets/shooterGame.png";
import pixiquizImg from "./assets/pixquiz-image.png";
import portfolioImage from "./assets/portfolioProject-image.webp";
import bharatBazzarImage from "./assets/bharatbazaar-Image.webp";
import sevaSangamImage from "./assets/sevaSangam-Image.webp";

const projectData: {
  projectTittle: string;
  projectImage: StaticImageData;
  description: string;
  tags: string[];
  link: string;
  github: string;
}[] = [
  {
    projectTittle: "Youtube Video Downloader",
    projectImage: ovdImg,
    description:
      "A web and Telegram bot for downloading YouTube videos in any quality (video and audio)",
    tags: [
      "React JS",
      "Node JS",
      "Cloud Storage",
      "FFMPEG",
      "Firebase",
      "FireStore",
    ],
    link: "",
    github: "https://github.com/SBRakeshRath/online-video-downloader",
  },
  // {
  //   projectTittle: "Bharat Bazar",
  //   projectImage: bharatBazzarImage,
  //   description:
  //     "Platform for business registration and user search functionality, developed during Rankshell internship.",
  //   tags: ["Real World","MERN", "Razorpay Payment", "GCP", "Client Interaction"],
  //   link: "https://bharatbazzar.co/",
  //   github: "",
  // },
  // {
  //   projectTittle: "Seva Sangam",
  //   projectImage: sevaSangamImage,
  //   description:
  //     "A digital platform for temple donations across India, Developed during Rankshell internship.",
  //   tags: ["Real World","MERN", "Razorpay Payment", "GCP", "Client Interaction"],
  //   link: "https://www.sevasangam.com/",
  //   github: "",
  // },
  {
    projectTittle: "PixiQuiz",
    projectImage: pixiquizImg,
    description:
      "An AI powered quiz app, where you can generate quizzes on any topic you can think of.",
    tags: ["Next JS", "Node JS", "Gemini AI", "GPT wrapper", "Vercel"],
    link: "https://pixiquiz.pixismith.com",
    github: "https://github.com/SBRakeshRath/pixi-quiz",
  },
  
  {
    projectTittle: "Guessing Number Game",
    projectImage: gngImg,
    description:
      "A web based game to Guess the number, guided by the average of all user guesses..",
    tags: [
      "API Rate limiting",
      "Vue JS",
      "Node JS",
      "Express JS",
      "API Gate Way",
      "Firebase",
    ],
    link: "https://gng.pixismith.com/",
    github: "https://github.com/SBRakeshRath/guessing-number-game-frontend",
  },
  {
    projectTittle: "Database less OTP",
    projectImage: dloImg,
    description:
      "A concept of generating, storing and validating OTP without need of a Database.",
    tags: [
      "Vue JS",
      "Node JS",
      "JWT",
      "HMAC",
      "Cloud Run",
      "Firebase",
      "FireStore",
    ],
    link: "https://db-less-otp.netlify.app/",
    github: "https://github.com/SBRakeshRath/DB-less-OTP-Frontend",
  },
  {
    projectTittle: "Portfolio Project",
    projectImage: portfolioImage,
    description:
      "I made this portfolio to show you my skills and all the projects I've completed so far.",
    tags: ["Next JS", "SCSS", "TypeScript", "Vercel", "Chart JS (little bit)"],
    link: "https://pixismith.com/",
    github: "https://github.com/SBRakeshRath/portfolio-frontend",
  },
  {
    projectTittle: "Shooter Game",
    projectImage: shooterGameImg,
    description:
      "A simple canvas based shooter game with level and score system along with cool animation.",
    tags: ["HTML", "CSS", "JavaScript", "canvas", "Trigonometry", "oops"],
    link: "https://shooter.game.pixismith.com/",
    github: "https://github.com/SBRakeshRath/canvasShooterGame",
  },
];

export default projectData;
