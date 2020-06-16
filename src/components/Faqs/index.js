import React from "react";
import Typography from "../Typography";

import styles from "./index.module.css";

export default function Faqs() {
  return (
    <div className={styles.root}>
      <Typography weight="bold" variant="h2" color="klein-blue">
        FAQ&#39;s
      </Typography>
      <div className={styles.content} />
    </div>
  );
}
