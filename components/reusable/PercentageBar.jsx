import React, { useState } from "react";
import styles from "../../styles/css/PercentageBar.module.css";

const PercentageBar = ({color, frontEnd, styling, backEnd}) => {
  const [technologies, setTechnologies] = useState({
    frontEnd: frontEnd,
    styling: styling,
    backEnd: backEnd,
  });

  const styleObj = {
    frontEnd: { width: `${technologies.frontEnd}%` },
    styling: { width: `${technologies.styling}%` },
    backEnd: { width: `${technologies.backEnd}%` },
  };
  return (
    <div className={styles.percentageBar_container} >

    <div className={styles.bar_container} style={{border: `2px solid ${color}`}}>
      <div className={styles.frontEnd} style={styleObj.frontEnd}></div>
      <div className={styles.styling} style={styleObj.styling}></div>
      <div className={styles.backEnd} style={styleObj.backEnd}></div>
    </div>
    <div className={styles.label_container}>
        <div className={styles.label}>
            <div className={styles.circle_orange}></div>
            <p className={styles.label_text} style={{color:color}}>Front-end</p>
        </div>
        <div className={styles.label}>
            <div className={styles.circle_blue2}></div>
            <p className={styles.label_text} style={{color:color}}>Styling</p>
        </div>
        <div className={styles.label}>
            <div className={styles.circle_purple}></div>
            <p className={styles.label_text} style={{color:color}}>Back-end & Database</p>
        </div>
    </div>
    </div>
  );
};

export default PercentageBar;
