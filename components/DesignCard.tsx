import React from "react";
import styles from "../styles/DesignCard.module.css";
import Image from "next/image";

interface Props {
  url: string;
  title: string;
  description: string;
}

const DesignCard = ({ url, title, description }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.info}>
          <h1>{title}</h1>

          <div className={styles.line_card}></div>
          <br />

          <p>{description}</p>
        </div>

        <Image
          src={url}
          alt="Logo"
          fill={true}
          className={styles.image}
          sizes="(max-width: 800px) 100vw,
              (max-width: 1200px) 25vw,
              33vw"
          priority
        />
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default DesignCard;
