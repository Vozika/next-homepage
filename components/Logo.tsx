import React from "react";
import Image from "next/image";
import styles from "../styles/Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image
        src="/logo.svg"
        alt="Logo"
        className={styles.image}
        fill={true}
        priority
      />
    </div>
  );
};

export default Logo;
