// import Link from "next/link";
import React, { useState } from "react";
import { Link as Scroll } from "react-scroll";
import Link from "next/link";
import styles from "../../styles/css/Navbar.module.css";
import NavItems from "./NavItems";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [dropDownActive, setDropDownActive] = useState(false);
  const hamburgerOpen = () => {
    setDropDownActive((pre) => !pre);
  };

  return (
    <nav className={styles.navbar_container}>
      <button onClick={hamburgerOpen} className={styles.menuButton}>
        <GiHamburgerMenu />
      </button>
      <Link href="/">
        <a>
          <div className={styles.logo_container}>
            <span className={styles.logo_first}>IYP</span>
            <span className={styles.logo_second}>Portfolio</span>
          </div>
        </a>
      </Link>
      <div className={styles.links_container}>
        <Scroll
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <div className={styles.links}>ABOUT</div>
        </Scroll>

        <Scroll
          to="myskills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <div className={styles.links}>MY SKILLS</div>
        </Scroll>
        <Scroll
          to="education"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <div className={styles.links}>EDUCATION</div>
        </Scroll>
        <Scroll
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <div className={styles.links}>PROJECTS</div>
        </Scroll>
      </div>
      {dropDownActive && <NavItems setDropDownActive={setDropDownActive} />}
      <div className={styles.email_container}>
        <Link href="mailto:iypark1714@gmail.com">
          <a className={styles.email}>iypark1714@gmail.com</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
