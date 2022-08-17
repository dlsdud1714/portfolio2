import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
// import MyImage from "../../utilities/IMG_3673-cutout2.png";
import Link from "next/link";

import styles from "../../styles/css/About.module.css";

const About = () => {
  const MyImage = '/picture/IMG_3673-cutout2.png'
  
  return (
    <div className={styles.container} id="about">
      <div className={styles.text_container}>
        <h1 className={styles.name}>Inyoung(Julia) Park</h1>
        <p className={styles.text_content_white_base}>
          Detail-oriented, self-motivated and meticulous full-stack web
          developer with passion in designing and initiating products.
          Supportive team player thinking how to provide better user experience
          continuously.
        </p>
        <div className={styles.icons_container}>
          <Link href="mailto:iypark1714@gmail.com">
            <a>
              <MdEmail className={styles.icon} />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/inyoung-park/">
            <a>
              <FaLinkedinIn className={styles.icon} />
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.imgDiv}>
        <Image
          src={MyImage}
          height="500px"
          alt=""
          width="385px"
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default About;
