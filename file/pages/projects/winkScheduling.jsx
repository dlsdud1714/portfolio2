import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import PercentageBar from "../../components/reusable/PercentageBar";
// import project2 from "../../utilities/project2_main.png";
// import git from "../../utilities/project2_git.png";
import styles from "../../styles/css/Projects_detail.module.css";
import Link from "next/link";

const WinkScheduling = () => {
  return (
    <div className={styles.project_detail_container}>
      <div className={styles.title_container}>
        <h2 className={styles.title_h2} style={{ position: "relative" }}>
          Employee Scheduling System
          <div
            className={styles.title_background}
            style={{ marginRight: "-1rem", width: "11rem" }}
          ></div>
        </h2>
        <div className={styles.subtitle}>at inceptionU</div>
      </div>

      <div className={styles.projInfoBox}>
        <div className={styles.tableRow}>
          <div className={styles.tableHead}>Product owner</div>
          <Link href="https://www.downloadwink.com/">
            <a className={styles.tableContent_blue}>Wink</a>
          </Link>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.tableHead}>Duration</div>
          <div className={styles.tableContent}>3 mos.</div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.tableHead}>Group</div>
          <div className={styles.tableContent}>3</div>
        </div>
      </div>

      <div className={styles.outline_container}>
        <div className={styles.info_container}>
          <div className={styles.descriptNplayer}>
            <div className={styles.player_wrapper}>
              <ReactPlayer
                className={styles.react_player}
                url="https://www.youtube.com/watch?v=Nv7JzOsvkq4"
                width="100%"
                controls={true}
              />
            </div>
            <div className={styles.descriptWrapper}>
              <p className={styles.title_h3}>DESCRIPTION</p>
              <p className={styles.info_text}>
                Employee scheduling can be time consuming and over or under
                scheduling employee resources can be costly to a business. We{" "}
                <b className={styles.highlight_bg_purple}>
                  increase efficiency of managing schedules, and reduce the risk
                  of costly mistakes of mismanaging resources.
                </b>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.info_container}>
          <p className={styles.title_h3}>STACK</p>
          <p className={styles.info_text}>
            : React, JavaScript, CSS, MUI, Express, Socket.IO and mySQL
          </p>
        </div>
        <div className={styles.info_container}>
          <p className={styles.title_h3}>MY CONTRIBUTION</p>
          <div className={styles.contribution_container}>
            <div className={styles.contribution_column}>
              <p className={styles.label}>Git Hub Commits</p>
              <div className={styles.photo_container}>
                <Image
                  src="/picture/project3_git.png"
                  height="200px"
                  alt=""
                  width="300px"
                  className={styles.img}
                />
              </div>
            </div>
            <div className={styles.contribution_column}>
              <p className={styles.label}>Stack percentage</p>
              <div className={styles.percentageBar_container}>
                <PercentageBar
                  color="$primary-gray"
                  frontEnd={40}
                  styling={35}
                  backEnd={25}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.info_container}>
          <p className={styles.title_h3}>My featured works</p>
          <div className={styles.background_blue}>
            <div className={styles.deco_background1}></div>
            <div className={styles.deco_background2}></div>
            <div className={styles.deco_background3}></div>
            <div className={styles.deco_background4}></div>
            <div className={styles.contents_tilted}>
              <div className={styles.content}>
                <div className={styles.text_area}>
                  <div className={styles.content_headline}>Weekly celendar</div>
                  <div className={styles.text_container}>
                    <div className={styles.text}>
                      1. Intuitive schedule bar design
                    </div>
                    <div className={styles.text}>
                      2. Automatic timezone conversion
                    </div>
                    <div className={styles.text}>
                      3. Filters to view co-workers schedules
                    </div>
                    <div className={styles.text}>4. Position display</div>
                  </div>
                </div>
                <div className={styles.photo_area}>
                  <Image
                    src="/picture/project3_weekly_slides.gif"
                    height="400px"
                    alt=""
                    width="800px"
                    className={styles.img}
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.photo_area}>
                  <Image
                    src="/picture/project3_daily.png"
                    height="400px"
                    alt=""
                    width="800px"
                    className={styles.img}
                  />
                </div>
                <div className={styles.text_area}>
                  <div className={styles.content_headline}>Daily calendar</div>
                  <div className={styles.text_container}>
                    <div className={styles.text}>
                      1. My today shift with all of co-workers shifts working today
                    </div>
                    <div className={styles.text}>
                      2. Detailed, but simple UI/UX
                    </div>
             
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.text_area}>
                  <div className={styles.content_headline}>
                    Shift scheduler for store manager
                  </div>
                  <div className={styles.text_container}>
                    <div className={styles.text}>
                      1. Display time at store timezone
                    </div>
                    <div className={styles.text}>
                      2. Intuitive CRUD scheduling
                    </div>
                    <div className={styles.text}>
                      3. User-friendly filters
                    </div>
                    <div className={styles.text}>
                      4. Display employees scheduled/available hours
                    </div>
                    <div className={styles.text}>
                      5. Working/vacation scheduling available
                    </div>
                  </div>
                </div>
                <div className={styles.photo_area}>
                  <Image
                    src="/picture/project3_scheduling.gif"
                    height="400px"
                    alt=""
                    width="800px"
                    className={styles.img}
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.photo_area}>
                  <Image
                    src="/picture/project3_ShiftSwapRequest.png"
                    height="400px"
                    alt=""
                    width="800px"
                    className={styles.img}
                  />
                </div>
                <div className={styles.text_area}>
                  <div className={styles.content_headline}>
                    Shift swap request
                  </div>
                  <div className={styles.text_container}>
                    <div className={styles.text}>
                      1. Simple swap shift request 
                    </div>
                    <div className={styles.text}>
                      2. Swap with other co-workers shift options 
                    </div>
                    <div className={styles.text}>
                      3. Blocked schedule for swap shift confirmation 
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                
                <div className={styles.text_area}>
                  <div className={styles.content_headline}>
                    Mobile weekly & daily calendar
                  </div>
                  <div className={styles.text_container}>
                    <div className={styles.text}>
                      1. Simple & intuitive design to read schedules
                    </div>
                    <div className={styles.text}>
                      2. weekly summary to check scheduled hours per week
                    </div>
                    <div className={styles.text}>
                      3. Easy weekly & daily scheduler switch
                    </div>
                  </div>
                </div>
                <div className={styles.photo_area}>
                  <Image
                    src="/picture/project3_mobile_slides.gif"
                    height="350px"
                    alt=""
                    width="220px"
                    className={styles.img}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinkScheduling;
