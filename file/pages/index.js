import About from "../components/sections/About";
import Myskills from "../components/sections/Myskills";
import Education from "../components/sections/Education";
import Projects from "../components/sections/Projects";

import styles from "../styles/css/Home.module.css";

export default function Home() {
  return (
    <>
      <About />
      <Myskills />
      <Education />
      <Projects />
    </>
  );
}
