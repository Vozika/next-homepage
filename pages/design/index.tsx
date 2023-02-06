import React from "react";
import DesignCard from "../../components/DesignCard";
import design_data from "../../data/design_data";
import styles from "../../styles/Design.module.css";
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

const Design = () => {
  let url = 0;

  return (
    <motion.div
      className={styles.main}
      variants={variants}
      initial="initial"
      animate="animate"
    >
      {design_data.map((data) => {
        if (url > 7) {
          url = 0;
        }

        return (
          <motion.div variants={variants}>
            <DesignCard
              key={data.id}
              url={`/images/${data.type}/000${(url = url + 1)}.jpg`}
              title={data.title}
              description={data.description}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Design;
