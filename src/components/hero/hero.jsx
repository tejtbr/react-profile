import react from "react";
import { getImageUrl } from "../../utils";
import Styles from "./hero.module.css";

export const Hero = () => {
  return (
    <section className={Styles.container}>
      <div className={Styles.content}>
        <h1 className={Styles.title}>Hi, I'm Tejas</h1>
        <p className={Styles.desc}> I am softwere Engineer </p>
        <a href="mailto:@tejtbr@gmail.com" className={Styles.contactmail}>
          Conact me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="hero image"
        className={Styles.heroimage}></img>
      <div className={Styles.topblur}> </div>
      <div className={Styles.bottomblur}> </div>
    </section>
  );
};
