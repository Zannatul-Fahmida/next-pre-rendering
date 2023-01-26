import styles from "../styles/About.module.css";
import style from "../styles/About.module.scss";

const About = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.highlight}>About Page</h2>
      <h2 className={style.highlightscss}>About Page</h2>
      <button className="btn btn-primary">Primary</button>
    </div>
  );
};

export default About;
