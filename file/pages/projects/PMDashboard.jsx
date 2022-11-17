import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

import styles from "../../styles/css/Projects_detail.module.css";

function PMDashboard() {
  return (
    <div className={styles.project_detail_container}>

      <div className={styles.title_container}>
        <h2 className={styles.title_h2} style={{ position: "relative" }}>
          Project Management Dashboard Figma UI/UX Design
          <div
            className={styles.title_background}
            style={{ marginRight: "-1rem", width: "11rem" }}
          ></div>
        </h2>
        <div className={styles.subtitle}>at New Idea Machine</div>
      </div>

      <div className={styles.outline_container}>
        <div className={styles.info_container}>
          <div className={styles.descriptNplayer}>
            <div className={styles.player_wrapper}>
              <ReactPlayer
                className={styles.react_player}
                url="/videos/PMProject_mainVideo.mov"
                width="100%"
                height="100%"
                // playing={true}
                controls={true}
                config={{
                  attributes: {
                    poster: "/picture/PMproject_main.png",
                  },
                }}
              />
            </div>
            <div className={styles.descriptWrapper}>
              <p className={styles.title_h3}>DESCRIPTION</p>
              <p className={styles.info_text}>: Dashboard design to manage financials, project time, and human resources</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PMDashboard;
