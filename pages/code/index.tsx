import React from "react";
import CodeCard from "../../components/CodeCard";
import code_data from "../../data/code_data";
import styles from "../../styles/Code.module.css";
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Code = () => {
  return (
    <motion.div
      className={styles.main}
      variants={variants}
      initial="initial"
      animate="animate"
    >
      {code_data.map((data) => {
        return (
          <motion.div variants={variants}>
            <CodeCard
              key={data.id}
              title={data.title}
              text={data.text}
              github_url={data.github_url}
              tech={data.tech}
              url={"../live/" + data.url}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Code;
