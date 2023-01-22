import React from "react";
import styles from "../styles/CodeCard.module.css";
import { VscMultipleWindows } from "react-icons/vsc";
import { VscGithub } from "react-icons/vsc";

interface Props {
  title: string;
  text: string;
  github_url: string;
}

const url = "";
const github_prefix = "https://github.com/Vozika/";

const CodeCard = ({ title, text, github_url }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{title}</h1>
        <p>
          {text}
          <br />
          <br />
        </p>

        <div className={styles.icons_container}>
          <div className={styles.icons_container_block}>
            <VscMultipleWindows size={32} color="rgb(var(--primary-rgb))" />
            <a href="">Посмотреть вживую</a>
          </div>
          <div className={styles.icons_container_block}>
            <VscGithub size={32} color="rgb(var(--primary-rgb))" />
            <a href={github_prefix + github_url}>Код на Гитхабе</a>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default CodeCard;
