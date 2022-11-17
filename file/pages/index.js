import About from "../components/sections/About";
import Myskills from "../components/sections/Myskills";
import Education from "../components/sections/Education";
import Projects from "../components/sections/Projects";

import styles from "../styles/css/Home.module.css";
import Layout from "../components/header/Layout";
import Navbar from "../components/header/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
      <About />
      <Myskills />
      <Education />
      <Projects />
    </>
  );
}
