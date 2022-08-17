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
                  their products for business owners and services to easily find
                  Calgary stores and to wisely compare products for customers.
                </b>
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
            <div className={styles.contribution_column}>
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
            <div className={styles.contribution_column}>
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
          <p className={styles.title_h3}>My featured works</p>
          <div className={styles.background_blue}>
            <div className={styles.deco_background1}></div>
            <div className={styles.deco_background2}></div>
            <div className={styles.deco_background3}></div>
            <div className={styles.deco_background4}></div>
            <div className={styles.contents_tilted}>
              <div className={styles.content}>
                <div className={styles.text_area}>
                  <div className={styles.content_headline}>
                    Mapbox is used to ...
                  </div>
                  <div className={styles.text_container}>
                    <div className={styles.text}>
                      1. find local businesses near my location.
                    </div>
                    <div className={styles.text}>
                      2. filter categories.
                    </div>
                    <div className={styles.text}>
                      3. list businesses with New and Estabilished labels.
                    </div>
                    <div className={styles.text}>
                      4. find detail infomation of selected business.
                    </div>
                  </div>
                </div>
                <div className={styles.photo_area}>
                <Image
                  src="/picture/project2_map_slides.gif"
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
                  src="/picture/project2_reactquill_slides.gif"
                  height="400px"
                  alt=""
                  width="800px"
                  className={styles.img}
                />
                </div>
                <div className={styles.text_area}>
                  <div className={styles.content_headline}>
                    React Quill editor is used to ...
                  </div>
                  <div className={styles.text_container}>
                    <div className={styles.text}>
                      1. create, read, update, and delete posts.
                    </div>
                    <div className={styles.text}>
                      2. leave comments and reviews for customers.
                    </div>
                    <div className={styles.text}>
                      3. enable to communicate with customers for marketing purposes.
                    </div>
                    
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

export default LocalBusiness;
