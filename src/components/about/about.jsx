import React from "react";

import styles from "./about.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>BMS institute Of technology and management</h3>
              <br />
              <p>
                <bold>B.Tech</bold> in Information Science and Engineering
              </p>
              <p>
                <bold>Grad.</bold> 2024
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <bold>CGPA</bold>: 7.86
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>SHAANTINIKETANS P U COLLEGE</h3>
              <br />
              <p>
                <bold>PCMC's</bold>
              </p>
              <p>
                <bold> Grad. </bold> Mar 2020
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <bold>Per. </bold>: 90.60
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI GOVERNMENT HIGH SCHOOL</h3>
              <br />
              <p>
                <bold>SSLC</bold>
              </p>
              <p>
                <bold> Grad. </bold> Apr 2024
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <bold>Per. </bold>: 83.2
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
