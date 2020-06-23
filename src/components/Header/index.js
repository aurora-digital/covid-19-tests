import React from "react";
import Typography from "../Typography";

import styles from "./index.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <Typography variant="h1">Covid-19 tests</Typography>
    </div>
  );
}

export default Header;
