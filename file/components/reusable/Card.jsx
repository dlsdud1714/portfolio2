import React from "react";
import { AiFillCheckSquare } from "react-icons/ai";
import styles from "../../styles/css/Card.module.css";

const Card = () => {
  return (
    <div className={styles.cards_container}>
      <div className={styles.text_card}>
        <div className={styles.first_column}>
          <div className={styles.edu_detailDiv}>
            <p className={styles.edu_title}>INCEPTION U</p>
            <div className={styles.edu_div}>

            <p className={styles.edu_period}>2022-02 ~ 2022-07</p>
            <p className={styles.edu_location}>Calgary, Canada</p>
          </div>
          <div className={styles.edu_detailDiv2}>
            <p className={styles.edu_title_detail}>
              Full-stack Web Development Training Program
            </p>
            </div>
          </div>
        </div>
        <div className={styles.second_column}>
          <div className={styles.keyword_container}>
            <div className={styles.keyword1_in}>
              <span className={styles.highlight_bg_purple_rv}>
                Project-based
              </span>{" "}
              Learning
            </div>
            <div className={styles.keyword2_in}>
              <span className={styles.highlight_bg_yellow}>Hands-on</span>{" "}
              projects
            </div>
            <div className={styles.keyword3_in}>Full-stack</div>
            <div className={styles.keyword4_in}>
              <span className={styles.highlight_bg_blue_rv}>Scrum & Agile</span>
            </div>
            <div className={styles.keyword5_in}>
              <span className={styles.highlight_bg_purple}>MERN</span>
              -stack
            </div>
            <div className={styles.keyword6_in}>
              <span className={styles.highlight_bg_purple}>Teamwork</span>
            </div>
            <div className={styles.keyword7_in}>
              <span className={styles.highlight_bg_blue2_rv}>Collaboration with company</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.text_card}>
        <div className={styles.first_column}>
            <div className={styles.edu_detailDiv}>
          <p className={styles.edu_title}>University of Calgary</p>
          <div className={styles.edu_div}>
              <p className={styles.edu_period}>2018-09 ~ 2022-01</p>
              <p className={styles.edu_location}>Calgary, Canada</p>
            </div>
            <div className={styles.edu_detailDiv2}>
              <p className={styles.edu_title_detail}>
                MSc: Chemical Engineering
              </p>
            </div>
          </div>
        </div>
        <div className={styles.second_column}>
          <div className={styles.keyword_container}>
            <div className={styles.keyword1_uc}>
              <span className={styles.highlight_bg_orange}>
                Petroleum Engineering
              </span>
            </div>
            <div className={styles.keyword2_uc}>
              <span className={styles.highlight_bg_yellow}>Research</span> on
              bitumen
            </div>
            <div className={styles.keyword3_uc}>Thesis</div>
            <div className={styles.keyword4_uc}>
              <span className={styles.highlight_bg_blue_rv}>Communication</span>
            </div>
            <div className={styles.keyword5_uc}>
              <span className={styles.highlight_bg_purple}>
                Troubleshooting
              </span>
            </div>
            <div className={styles.keyword6_uc}>
              <span className={styles.highlight_bg_blue2}>Mathematics</span>
            </div>
            <div className={styles.keyword7_uc}>
              <span className={styles.highlight_bg_gray_rv}>GPA 3.8/4.0</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.text_card}>
        <div className={styles.first_column}>
          <div className={styles.edu_detailDiv}>
            <p className={styles.edu_title}>Inha University</p>
          <div className={styles.edu_div}>
            <p className={styles.edu_period}>2013-03 ~ 2017-08</p>
            <p className={styles.edu_location}>Incheon, South Korea</p>
          </div>
          <div className={styles.edu_detailDiv2}>
            <p className={styles.edu_title_detail}>
              BSc: Energy Resources Engineering
            </p>
            </div>
          </div>
        </div>
        <div className={styles.second_column}>
          <div className={styles.keyword_container}>
            <div className={styles.keyword1_ih}>
              <span className={styles.highlight_bg_orange}>Engineering</span>
            </div>
            <div className={styles.keyword2_ih}>
              Interdisciplinary degree:
              <span className={styles.highlight_bg_yellow_rv}>
                Offshore Plant Engineering
              </span>
            </div>
            <div className={styles.keyword3_ih}>
              3-year
              <span className={styles.highlight_bg_blue2}> honor student</span>
            </div>
            <div className={styles.keyword4_ih}>
              <span className={styles.highlight_bg_blue_rv}>
                GPA: 4.06/4.50
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
