import Image from "next/image";
import React from "react";
import PercentageBar from "../reusable/PercentageBar";
import project2 from "../../utilities/project2_main.png";
import project3 from "../../utilities/project3_main.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import styles from "../../styles/css/Projects.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
// import 'swiper/css/scrollbar';

const projects = () => {
  return (
    <div className={styles.contents} id="projects">
      <div className={styles.title_container}>
        <h1 className={styles.title_h1}>projects</h1>
        <div className={styles.title_background}></div>
      </div>
      <div className={styles.text_body}>
        <div className={styles.project_backgroud}></div>
        <Swiper
          pagination={true}
          loop={true}
          // navigation={true}
          modules={[Pagination]}
          // className={styles.mySwiper}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={styles.container_blue}>
              <div className={styles.img_container}>
                <Image src={project3} layout="fill" />
              </div>
              <div className={styles.text_container}>
                <div className={styles.first_row}>
                  <h2 className={styles.title_h2}>
                    Employee scheduling system
                  </h2>
                  <div className={styles.text_details_container}>
                    <div className={styles.details}>
                      <p className={styles.title_h3}>DESCRIPTION</p>
                      <p className={styles.text}>
                        : Employee schedules management app providing calendar,
                        scheduling, messaging, and shift swap.
                      </p>
                    </div>
                    <div className={styles.details}>
                      <p className={styles.title_h3}>STACK</p>
                      <p className={styles.text}>
                        : React, JavaScript, CSS, Express, and mySQL
                      </p>
                    </div>
                    <div className={styles.details_contribution}>
                      <p className={styles.title_h3}>MY CONTRIBUTION</p>
                      <div className={styles.percentageBar_container}>
                        <PercentageBar
                          color="white"
                          frontEnd={40}
                          styling={35}
                          backEnd={25}
                        />
                      </div>
                    </div>
                    <div className={styles.details}>
                      <p className={styles.title_h3}>DURATION</p>
                      <p className={styles.text}>: 3 months</p>
                    </div>
                    <div className={styles.details}>
                      <p className={styles.title_h3}>GROUP</p>
                      <p className={styles.text}>: 3 (+ with Wink)</p>
                    </div>
                  </div>
                </div>
                <div className={styles.second_row}></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.container_blue}>
              <div className={styles.img_container}>
                <Image src={project2} layout="fill" alt="" />
              </div>
              <div className={styles.text_container}>
                <div className={styles.first_row}>
                  <h2 className={styles.title_h2}>
                    Calgary Local Business website
                  </h2>

                  <div className={styles.text_details_container}>
                    <div className={styles.details}>
                      <p className={styles.title_h3}>DESCRIPTION</p>
                      <p className={styles.text}>
                        : Interactive platform for calgary local businesses
                        suffered insufficient budgets for marketing.
                      </p>
                    </div>
                    <div className={styles.details}>
                      <p className={styles.title_h3}>STACK</p>
                      <p className={styles.text}>
                        : React, JavaScript, CSS, Bootscrap, Express, and Mongo
                        DB
                      </p>
                    </div>
                    <div className={styles.details_contribution}>
                      <p className={styles.title_h3}>MY CONTRIBUTION</p>
                      <div className={styles.percentageBar_container}>
                        <PercentageBar
                          color="white"
                          frontEnd={45}
                          styling={20}
                          backEnd={35}
                        />
                      </div>
                    </div>
                    <div className={styles.details}>
                      <p className={styles.title_h3}>DURATION</p>
                      <p className={styles.text}>: 1.5 months</p>
                    </div>
                    <div className={styles.details}>
                      <p className={styles.title_h3}>GROUP</p>
                      <p className={styles.text}>: 3</p>
                    </div>
                  </div>
                </div>
                <div className={styles.second_row}>
                  <Link href="/projects/localBusiness">
                    <a className={styles.button_container}>
                    <button className={styles.button}>
                      Learn more about this project
                    </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default projects;
