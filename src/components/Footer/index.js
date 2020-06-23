import React from "react";
import Typography from "../Typography";
import Logo from "../Logo";

import styles from "./index.module.css";

function Footer() {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Typography color="baby-blue">Powered by</Typography>
        <Logo />
      </div>
    </div>
  );
}

export default Footer;
