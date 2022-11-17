import Image from "next/image";
import Link from "next/link";
import React from "react";
import PercentageBar from "./PercentageBar";
import styles from "../../styles/css/Projects.module.css";

export const ProjectCard = (props) => {
  const project = props.project;

  return (
    <div className={styles.text_body}>
      <div className={styles.project_backgroud}></div>

      <div className={styles.container_blue}>
        <div className={styles.img_container}>
          <Image src={project.img} layout="fill" alt="" />
        </div>
        <div className={styles.text_container}>
          <div className={styles.first_row}>
            <h2 className={styles.title_h2}>{project.name}</h2>
            <div className={styles.text_details_container}>
              <div className={styles.details}>
                <p className={styles.title_h3}>DESCRIPTION</p>
                <p className={styles.text}>: {project.description}</p>
              </div>
              <div className={styles.details}>
                <p className={styles.title_h3}>STACK</p>
                <p className={styles.text}>
                  :{" "}
                  {project.stack.length === 1 ? (
                    <span>{project.stack[0]}</span>
                  ) : (
                    project.stack.map((e, i) => {
                      if (i == project.stack.length - 1) {
                        return <span key={i}>and {e}</span>;
                      }

                      return <span key={i}>{e}, </span>;
                    })
                  )}
                </p>
              </div>
              {project.myContribution && (
                <div className={styles.details_contribution}>
                  <p className={styles.title_h3}>MY CONTRIBUTION</p>
                  <div className={styles.percentageBar_container}>
                    <PercentageBar
                      color="white"
                      frontEnd={project.myContribution[0]}
                      styling={project.myContribution[1]}
                      backEnd={project.myContribution[2]}
                    />
                  </div>
                </div>
              )}
              {project.duration&&(<div className={styles.details}>
                <p className={styles.title_h3}>DURATION</p>
                <p className={styles.text}>: {project.duration} months</p>
              </div>)}
            </div>
          </div>
          <div className={styles.second_row}>
            <div className={styles.second_row}>
              <Link href={project.link}>
                <a className={styles.button_container}>
                  <button className={styles.button}>
                    Learn more about this project
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
