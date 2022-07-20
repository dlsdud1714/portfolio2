import Image from "next/image";
import React from "react";
import PercentageBar from "../../components/reusable/PercentageBar";
import styles from "../../styles/css/Projects_detail.module.css";
import git from "../../utilities/project2_git.png";
const LocalBusiness = () => {
  return (
    <div className={styles.project_detail_container}>
      <div className={styles.title_container}>
        <h2 className={styles.title_h2} style={{position:'relative'}}>Calgary Local Business website
        <div className={styles.title_background} style={{marginRight:"-1rem", width:'11rem'}}></div>
        </h2>
        <div className={styles.subtitle}>at inceptionU</div>
      </div>

      <div className={styles.outline_container}>
        <div className={styles.info_container}>
          <p className={styles.title_h3}>DESCRIPTION</p>
          <p className={styles.info_text}>
            : Calgary local businesses are suffered from insufficient budgets
            for marketing. Many of them even cannot get noticed because of lack
            of opportunities to gain exposure. Calgary Local Business website is
            an{" "}
            <b>
              interactive platform providing opportunities to advertise their
              products to business owners and services to easily find Calgary
              stores and to wisely compare products to customers
            </b>
            .
          </p>
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
                  src={git}
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
        <div className={styles.info_container}>
          <p className={styles.title_h3}>DURATION</p>
          <p className={styles.info_text}>: 1.5 months</p>
        </div>
        <div className={styles.info_container}>
          <p className={styles.title_h3}>GROUP</p>
          <p className={styles.info_text}>: 3</p>
        </div>
      </div>
    </div>
  );
};

export default LocalBusiness;
