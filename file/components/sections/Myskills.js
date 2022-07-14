import Image from "next/image";
import React, { useState } from "react";
import PercentageBar from "../reusable/PercentageBar";
import { FaStar } from "react-icons/fa";

import styles from "../../styles/css/Myskills.module.css";

const myskills = () => {
  return (
    <div className={styles.slide_background} id="myskills">
      <div className={styles.deco_background1}></div>
      <div className={styles.deco_background2}></div>
      <div className={styles.deco_background3}></div>
      <div className={styles.deco_background4}></div>

      <div className={styles.contents}>
        <div className={styles.title_container}>
          <h1 className={styles.title_h1}>MY SKILLS</h1>
          <div className={styles.title_background}></div>
        </div>
        <div className={styles.text_body}>
          <div className={styles.divided_container}>
            <h2 className={styles.title_h2}>TECHNOLOGIES</h2>
            <div className={styles.percentageBar_container}>
              <PercentageBar
                color="#264C78"
                frontEnd={40}
                styling={30}
                backEnd={30}
              />
            </div>
            <div className={styles.skill_container}>
              <h3 className={styles.title_h3}>FRONT-END</h3>

              <div className={styles.icon_container}>
                <i
                  className="devicon-react-original-wordmark colored"
                  style={{ fontSize: "4rem" }}
                ></i>

                <i
                  className="devicon-javascript-plain colored"
                  style={{ fontSize: "4rem" }}
                ></i>

                <i
                  className="devicon-nextjs-original-wordmark colored"
                  style={{ fontSize: "4rem" }}
                ></i>
              </div>
            </div>
            <div className={styles.skill_container}>
              <h3 className={styles.title_h3}>STYLING</h3>
              <div className={styles.icon_container}>
                <i
                  className="devicon-css3-plain-wordmark colored"
                  style={{ fontSize: "4rem" }}
                ></i>

                <i
                  className="devicon-sass-original colored"
                  style={{ fontSize: "4rem" }}
                ></i>
              </div>
            </div>
            <div className={styles.skill_container}>
              <h3 className={styles.title_h3}>BACK-END</h3>
              <div className={styles.icon_container}>
                <i
                  className="devicon-express-original-wordmark colored"
                  style={{ fontSize: "4rem" }}
                ></i>

                <i
                  className="devicon-mongodb-plain-wordmark colored"
                  style={{ fontSize: "4rem" }}
                ></i>

                <i
                  className="devicon-mysql-plain-wordmark colored"
                  style={{ fontSize: "4rem" }}
                ></i>
              </div>
            </div>
          </div>
          <div className={styles.divided_container}>
            <h2 className={styles.title_h2}>SOFT SKILLS</h2>
            <div className={styles.container_blue}>
              <p className={styles.text_content_white_xs}>:Dependable team player with strong work ethic. Known for bringing about thought-provoking ideas.</p>
              <div className={styles.skills_container}>
                <div className={styles.skill}>
                  <p className={styles.title_h3}>COMMUNICATION</p>
                  <div className={styles.star_container}>
                    <FaStar color="#FFCF21" fontSize="1.8rem" />{" "}
                    <FaStar color="#FFCF21" fontSize="1.8rem" />{" "}
                    <FaStar color="#FFCF21" fontSize="1.8rem" />{" "}
                    <FaStar color="#FFCF21" fontSize="1.8rem" />{" "}
                    <FaStar color="#FFCF21" fontSize="1.8rem" />
                  </div>
                </div>
                <div className={styles.skill}>
                  <p className={styles.title_h3}>TEAMWORK</p>
                  <div className={styles.star_container}>
                    <FaStar color="#FFCF21" fontSize="1.8rem" />{" "}
                    <FaStar color="#FFCF21" fontSize="1.8rem" />{" "}
                    <FaStar color="#FFCF21" fontSize="1.8rem" />{" "}
                    <FaStar color="#FFCF21" fontSize="1.8rem" />{" "}
                    <FaStar color="#FFCF21" fontSize="1.8rem" />
                  </div>
                </div>
                <div className={styles.skill}>
                  <p className={styles.title_h3}>DETAIL-ORIENTED</p>
                  <div className={styles.star_container}>
                    <FaStar color="#FFCF21" fontSize="1.8rem" />{" "}
                    <FaStar color="#FFCF21" fontSize="1.8rem" />{" "}
                    <FaStar color="#FFCF21" fontSize="1.8rem" />{" "}
                    <FaStar color="#FFCF21" fontSize="1.8rem" />{" "}
                    <FaStar color="#FFCF21" fontSize="1.8rem" />
                  </div>
                </div>
                <div className={styles.skill}>
                  <p className={styles.title_h3}>FAST</p>
                  <div className={styles.star_container}>
                    <FaStar color="#FFCF21" fontSize="1.8rem" />{" "}
                    <FaStar color="#FFCF21" fontSize="1.8rem" />{" "}
                    <FaStar color="#FFCF21" fontSize="1.8rem" />{" "}
                    <FaStar color="#FFCF21" fontSize="1.8rem" />{" "}
                    <FaStar color="#FFCF21" fontSize="1.8rem" />
                  </div>
                </div>
                <div className={styles.skill}>
                  <p className={styles.title_h3}>Responsible</p>
                  <div className={styles.star_container}>
                    <FaStar color="#FFCF21" fontSize="1.8rem" />{" "}
                    <FaStar color="#FFCF21" fontSize="1.8rem" />{" "}
                    <FaStar color="#FFCF21" fontSize="1.8rem" />{" "}
                    <FaStar color="#FFCF21" fontSize="1.8rem" />{" "}
                    <FaStar color="#FFCF21" fontSize="1.8rem" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default myskills;
