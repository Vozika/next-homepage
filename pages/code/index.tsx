import React from "react";
import CodeCard from "../../components/CodeCard";
import code_data from "../../data/code_data";
import styles from "../../styles/Code.module.css";

const Code = () => {
  return (
    <div className={styles.main}>
      {code_data.map((data) => {
        return (
          <CodeCard
            key={data.id}
            title={data.title}
            text={data.text}
            github_url={data.github_url}
            tech={data.tech}
          />
        );
      })}
    </div>
  );
};

export default Code;
