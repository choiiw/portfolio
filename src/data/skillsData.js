// src/data/skillsData.js
import { FaReact, FaJava, FaTools } from "react-icons/fa";
import { SiSpring, SiMysql, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";

const skillsData = [
  {
    category: "Front End",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
    ],
  },
  {
    category: "Back End",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "SpringFramework", icon: <SiSpring /> },
    ],
  },
  {
    category: "Database",
    skills: [{ name: "MySQL", icon: <SiMysql /> }],
  },
  {
    category: "Tools",
    skills: [
      { name: "VSCode", icon: <FaTools /> },
      { name: "IntelliJ IDEA", icon: <FaTools /> },
    ],
  },
];

export default skillsData;