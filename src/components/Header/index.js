import React from "react";
import Typography from "../Typography";

import styles from "./index.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <Typography variant="h2">Covid-19 tests</Typography>
      <div className={styles.menu}>
        <a href="#faqs">
          <Typography variant="h3">FAQ&#39;s</Typography>
        </a>
      </div>
    </div>
  );
}

export default Header;
