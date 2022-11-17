import React from "react";
import PMProject from "../../public/picture/PMproject_main.png";
import project2 from "../../public/picture/project2_main.png";
import project3 from "../../public/picture/project3_main.png";
import styles from "../../styles/css/Projects.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ProjectCard } from "../reusable/ProjectCard";

const projects = () => {

  const data = [
    {
      name: "Project Management Dashboard Figma UI/UX Design",
      img:PMProject,
      description:
        "Dashboard to manage financials, project time, and human resources",
      stack: ['Figma'],
      // myContribution:[40,35,25],
      // duration:3,
      link:"/projects/PMDashboard"
    },
    {
      name: "Employee Scheduling System",
      img:project3,
      description:
        "Employee schedules management app providing calendar, scheduling, messaging, and shift swap.",
      stack: ['React', 'JavaScript', 'CSS', 'Express', 'MUI', 'mySQL'],
      myContribution:[40,35,25],
      duration:3,
      link:"/projects/winkScheduling"
    },{
      name: "Calgary Local Business Website",
      img: project2,
      description:
      "Interactive platform for calgary local businesses suffered insufficient budgets for marketing.",
      stack:['React', 'JavaScript', 'CSS', 'Express', 'Bootstrap', 'MongoDB'],
      myContribution: [45,25,35],
      duration:1.5,
      link:"/projects/localBusiness"
    }
  ];
  return (
    <div className={styles.contents} id="projects">
      <div className={styles.title_container}>
        <h1 className={styles.title_h1}>projects</h1>
        <div className={styles.title_background}></div>
      </div>
      {data.map((d,i)=>{

       return <ProjectCard key={i} project={d}/>
      })
} 
    </div>
  );
};

export default projects;
