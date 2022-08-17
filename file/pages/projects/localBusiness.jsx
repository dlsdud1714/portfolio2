import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import PercentageBar from "../../components/reusable/PercentageBar";
// import project2 from "../../utilities/project2_main.png";
// import git from "../../utilities/project2_git.png";
import styles from "../../styles/css/Projects_detail.module.css";

const LocalBusiness = () => {
  return (
    <div className={styles.project_detail_container}>
      <div className={styles.title_container}>
        <h2 className={styles.title_h2} style={{ position: "relative" }}>
          Calgary Local Business website
          <div
            className={styles.title_background}
            style={{ marginRight: "-1rem", width: "11rem" }}
          ></div>
        </h2>
        <div className={styles.subtitle}>at inceptionU</div>
      </div>

      <div className={styles.projInfoBox}>
        <div className={styles.tableRow}>
          <div className={styles.tableHead}>Duration</div>
          <div className={styles.tableContent}>1.5 mos.</div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.tableHead}>Group</div>
          <div className={styles.tableContent}>3</div>
        </div>
      </div>
      <div className={styles.infoContainer}></div>
      <div className={styles.outline_container}>
        <div className={styles.info_container}>
          <div className={styles.descriptNplayer}>
            <div className={styles.player_wrapper}>
              <ReactPlayer
                className={styles.react_player}
                url="/videos/project2_mainVideo.mov"
                width="100%"
                height="100%"
                // playing={true}
                controls={true}
                config={{
                  attributes: {
                    poster: "/picture/project2_main.png",
                  },
                }}
              />
            </div>
            <div className={styles.descriptWrapper}>
              <p className={styles.title_h3}>DESCRIPTION</p>
              <p className={styles.info_text}>
                : Calgary local businesses are suffered from insufficient
                budgets for marketing. Many of them even cannot get noticed
                because of lack of opportunities to gain exposure. Calgary Local
                Business website is an{" "}
                <b className={styles.highlight_bg_purple}>
                  interactive platform providing opportunities to advertise
                  their products to business owners and services to easily find
                  Calgary stores and to wisely compare products to customers
                </b>
                .
              </p>
            </div>
          </div>
        </div>
        <div className={styles.info_container}>
          <p className={styles.title_h3}>STACK</p>
          <p className={styles.info_text}>
            : React, JavaScript, CSS, Bootscrap, Express, and Mongo DB
          </p>
        </div>
        <div className={styles.info_container}>
          <p className={styles.title_h3}>MY CONTRIBUTION</p>
          <div className={styles.contribution_container}>
            <div className={styles.first_column}>
              <p className={styles.label}>Git Hub Commits</p>
              <div className={styles.photo_container}>
                <Image
                  src="/picture/project2_git.png"
                  height="200px"
                  alt=""
                  width="300px"
                  className={styles.img}
                />
              </div>
            </div>
            <div className={styles.second_column}>
              <p className={styles.label}>Stack percentage</p>
              <div className={styles.percentageBar_container}>
                <PercentageBar
                  color="$primary-gray"
                  frontEnd={45}
                  styling={20}
                  backEnd={35}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalBusiness;
