import React from "react";
import DesignCard from "../../components/DesignCard";
import design_data from "../../data/design_data";
import styles from "../../styles/Design.module.css";

const Design = () => {
  let url = 0;

  return (
    <div className={styles.main}>
      {design_data.map((data) => {
        if (url > 7) {
          url = 0;
        }

        return (
          <DesignCard
            key={data.id}
            url={`/images/${data.type}/000${(url = url + 1)}.jpg`}
            title={data.title}
            description={data.description}
          />
        );
      })}
    </div>
  );
};

export default Design;
