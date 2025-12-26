// PROJECT IMAGES
import Proj1Img from "@/assets/images/projects/proj1.png";
import Proj2Img from "@/assets/images/projects/proj2.png";
import Proj3Img from "@/assets/images/projects/proj3.png";
import Proj4Img from "@/assets/images/projects/proj4.png";
import Proj5Img from "@/assets/images/projects/proj5.png";

export const projectData = [
  {
    imgUrl: Proj1Img,
    heading: "Responsive Dashboard UI",
    desc: (
      <ul style={{ listStyleType: "disc" }}>
        <li>
          This project is a <b>pixel-perfect</b> dashboard built using{" "}
          <b>Next.js</b>.
        </li>
        <li>
          It uses <b>Tailwind CSS</b> to make the design fully responsive on all
          devices.
        </li>
        <li>All graphs are created from scratch without any libraries.</li>
        <li>
          The dashboard data is loaded and displayed using <b>JSON</b> files.
        </li>
      </ul>
    ),
    link: "https://responsive-dashboard-plu.vercel.app/",
    skills: ["Next.js", "Tailwind CSS", "Typescript"],
    githubLink: "",
  },
  {
    imgUrl: Proj2Img,
    heading: "Netflix Movies List App",
    desc: (
      <ul style={{ listStyleType: "disc" }}>
        <li>
          This project shows list of Netflix movies built using <b>Next.js</b>{" "}
          and CSS.
        </li>
        <li>
          It uses the Netflix <b>API</b> to fetch movie data.
        </li>
        <li>Movies are shown as cards with images and details.</li>
        <li>
          Users can view information about different movies in a clean layout.
        </li>
      </ul>
    ),
    link: "https://movie-next-project.vercel.app/",
    skills: ["Next.js", "CSS", "Javascript"],
    githubLink: "https://github.com/ashishverma94/Movie_Next_Project",
  },
  {
    imgUrl: Proj3Img,
    heading: "Blog Web App",
    desc: (
      <ul style={{ listStyleType: "disc" }}>
        <li>
          This project is a Blog Web App built using the <b>MERN</b> stack.
        </li>
        <li>Users can create, read, update, and delete blog posts easily.</li>
        <li>
          The Jodit <b>Editor</b> is used to write blogs section wise with
          images and links.
        </li>
        <li>
          <b>MongoDB</b> stores all blog data, and Zustand is used for state
          management.
        </li>
      </ul>
    ),
    link: "https://zupay-blog-frontend.vercel.app/",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Zustand"],
    githubLink: "https://github.com/ashishverma94/zupay-blog",
  },
  {
    imgUrl: Proj4Img,
    heading: "Youtube Player Notes",
    desc: (
      <ul style={{ listStyleType: "disc" }}>
        <li>
          This project is a YouTube Player Notes App built using <b>React.js</b>
          .
        </li>
        <li>
          Users can add markdown notes at specific timestamps while watching a
          video.
        </li>
        <li>
          The app works using a <i>YouTube video ID</i> to load the video.
        </li>
        <li>
          All notes, text, and images are saved in <b>localStorage</b> for later
          use.
        </li>
        <li>User can also delete and edit notes as per their requirement.</li>
      </ul>
    ),
    link: "https://youtube-player-notes.vercel.app/",
    skills: ["React.js", "CSS", "Javascript"],
    githubLink: "https://github.com/ashishverma94/Youtube-Player-Notes",
  },
  {
    imgUrl: Proj5Img,
    heading: "Usability Clone",
    desc: (
      <ul style={{ listStyleType: "disc" }}>
        <li>
          This project is a Usability Clone built using pure <b>HTML</b> and{" "}
          <b>CSS</b>.
        </li>
        <li>The layout is clean and simple.</li>
        <li>
          It is fully <b>responsive</b> and works well on all screen sizes.
        </li>
      </ul>
    ),
    link: "https://usability-clone-three.vercel.app/",
    skills: ["HTML", "CSS", "Responsive Design"],
    githubLink: "https://github.com/ashishverma94/Usability_Clone",
  },
];

// NAV ICONS
import {
  FaHome,
  FaUser,
  FaTools,
  FaAward,
  FaFileCode,
  FaProjectDiagram,
} from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";

export const navItems = [
  { href: "/", label: "HOME", icon: FaHome },
  // { href: "/about-us", label: "ABOUT", icon: FaUser },
  // { href: "/certifications", label: "CERTS", icon: FaAward },
  { href: "/experience", label: "WORKS", icon: FaBriefcase },
  { href: "/skills", label: "SKILLS", icon: FaTools },
  // { href: "/coding", label: "CODING", icon: FaFileCode },
  { href: "/projects", label: "PROJECTS", icon: FaProjectDiagram },
  // { href: "/contact-us", label: "CONTACT", icon: MdContactSupport },
];

// SKILLS ICONS
import CSSIcon from "@/assets/icons/skills/css.svg";
import SqlIcon from "@/assets/icons/skills/sql.svg";
import GitIcon from "@/assets/icons/skills/git.svg";
import CPPIcon from "@/assets/icons/skills/cpp.svg";
import ApiIcon from "@/assets/icons/skills/api.svg";
import HtmlIcon from "@/assets/icons/skills/html.svg";
import ReduxIcon from "@/assets/icons/skills/redux.svg";
import ReactIcon from "@/assets/icons/skills/react.svg";
import MongoIcon from "@/assets/icons/skills/mongo.svg";
import LinuxIcon from "@/assets/icons/skills/linux.svg";
import FigmaIcon from "@/assets/icons/skills/figma.svg";
import NodeJsIcon from "@/assets/icons/skills/nodejs.svg";
import PythonIcon from "@/assets/icons/skills/python.svg";
import NextJsIcon from "@/assets/icons/skills/nextjs.svg";
import VscodeIcon from "@/assets/icons/skills/vscode.svg";
import GithubIcon from "@/assets/icons/skills/github.svg";
import PrismaIcon from "@/assets/icons/skills/prisma.svg";
import PostmanIcon from "@/assets/icons/skills/postman.svg";
import ExpressIcon from "@/assets/icons/skills/express.svg";
import TailwindIcon from "@/assets/icons/skills/tailwind.svg";
import PostgresIcon from "@/assets/icons/skills/postgres.svg";
import JavascriIcon from "@/assets/icons/skills/javascript.svg";
import TypescriIcon from "@/assets/icons/skills/typescript.svg";
import BootstrapIcon from "@/assets/icons/skills/bootstrap.svg";

export const SkillsData = [
  {
    category: "Languages",
    skills: [
      { skillName: "HTML", skillIcon: HtmlIcon },
      { skillName: "CSS", skillIcon: CSSIcon },
      { skillName: "JavaScript", skillIcon: JavascriIcon },
      { skillName: "TypeScript", skillIcon: TypescriIcon },
      { skillName: "Python", skillIcon: PythonIcon },
      { skillName: "C++", skillIcon: CPPIcon },
    ],
  },

  {
    category: "Frontend",
    skills: [
      { skillName: "React", skillIcon: ReactIcon },
      { skillName: "Next.js", skillIcon: NextJsIcon },
      { skillName: "Redux", skillIcon: ReduxIcon },
      { skillName: "Tailwind CSS", skillIcon: TailwindIcon },
      { skillName: "Bootstrap", skillIcon: BootstrapIcon },
    ],
  },

  {
    category: "Backend",
    skills: [
      { skillName: "Node.js", skillIcon: NodeJsIcon },
      { skillName: "Express.js", skillIcon: ExpressIcon },
    ],
  },

  {
    category: "Databases",
    skills: [
      { skillName: "MongoDB", skillIcon: MongoIcon },
      { skillName: "MySQL", skillIcon: SqlIcon },
      { skillName: "PostgreSQL", skillIcon: PostgresIcon },
    ],
  },

  {
    category: "ORM & APIs",
    skills: [
      { skillName: "Prisma", skillIcon: PrismaIcon },
      { skillName: "REST APIs", skillIcon: ApiIcon },
    ],
  },

  {
    category: "Tools & Design",
    skills: [
      { skillName: "Linux", skillIcon: LinuxIcon },
      { skillName: "Git", skillIcon: GitIcon },
      { skillName: "GitHub", skillIcon: GithubIcon },
      { skillName: "Figma", skillIcon: FigmaIcon },
      { skillName: "VS Code", skillIcon: VscodeIcon },
      { skillName: "Postman", skillIcon: PostmanIcon },
    ],
  },
];

//EXPERIENCE
import DualImg from "@/assets/images/company/dualite.jpg";
import PlouImg from "@/assets/images/company/puresoft-labs.png";
import AFImg from "@/assets/images/company/affiliate-daddy.png";

export const ExperienceData = [
  {
    icon: PlouImg,
    company: "Puresoft Labs",
    role: "Fullstack Developer",
    duration: "Dec 2024 - Present",
    description: [
      "Developed responsive web applications using React and Next.js.",
      "Collaborated with designers to create seamless UI/UX.",
      "Implemented Redux for state management across large projects.",
    ],
    companyLink: "https://plou.eu/",
  },
  {
    icon: DualImg,
    company: "Dualite",
    role: "Frontend Intern",
    duration: "Sep 2024 - Dec 2024",
    description: [
      "Built RESTful APIs with Node.js and Express.",
      "Designed MongoDB and PostgreSQL database schemas.",
      "Integrated third-party services and APIs.",
    ],
    companyLink: "https://dualite.dev/ai-design-to-code",
  },
  {
    icon: AFImg,
    company: "Affiliate Daddy",
    role: "Frontend Intern",
    duration: "Apr 2024 - Aug 2020",
    description: [
      "Assisted in developing full-stack applications using MERN stack.",
      "Performed code reviews and wrote unit tests.",
      "Participated in Agile sprints and team stand-ups.",
    ],
    companyLink: "https://www.affiliatedaddy.info/",
  },
];
