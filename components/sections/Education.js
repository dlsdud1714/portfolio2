import React from "react";
import Card from "../reusable/Card";

import styles from "../../styles/css/Education.module.css";

const education = () => {

  return (
    <div className={styles.contents} id="education">
      <div className={styles.title_container}>
        <h1 className={styles.title_h1}>Education</h1>
        <div className={styles.title_background}></div>
      </div>
      <div className={styles.text_body}>
       <Card/>
       <button className={styles.button} >
        <a href="/In-young_Park_Resume.pdf"alt="alt text"
    target="_blank"
    rel="noopener noreferrer" >
        Find my resume here!</a></button>
      </div>
    </div>
  );
};

export default education;
