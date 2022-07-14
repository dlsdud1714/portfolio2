import React from 'react'
import { Link as Scroll } from "react-scroll";
import styles from "../../styles/css/Navmenu.module.css";

const NavItems = ({setDropDownActive}) => {
  return (
    <div className={styles.links_container} onClick={()=>setDropDownActive(false)}>
    <Scroll
      to="about"
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
    >
      <div onClick={()=>setDropDownActive(false)} className={styles.links}>ABOUT</div>
    </Scroll>

   
    <Scroll
      to="myskills"
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
    >
      <div onClick={()=>setDropDownActive(false)} className={styles.links}>MY SKILLS</div>
    </Scroll>
    <Scroll
      to="education"
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
    >
      <div onClick={()=>setDropDownActive(false)} className={styles.links}>EDUCATION</div>
    </Scroll>
    <Scroll
      to="projects"
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
    >
      <div onClick={()=>setDropDownActive(false)} className={styles.links}>PROJECTS</div>
    </Scroll>
  </div>
  )
}

export default NavItems