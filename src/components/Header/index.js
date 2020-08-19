import React from "react";
import Typography from "../Typography";
import { i18n } from "../../i18n";

import styles from "./index.module.css";

function Header() {
  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "pt" : "en");
  };

  return (
    <div className={styles.header}>
      <Typography variant="h2">Covid-19 tests</Typography>
      <div className={styles.menu}>
        <button onClick={changeLanguage}>
          <Typography variant="h3">
            {i18n.language === "pt" ? "en" : "pt"}
          </Typography>
        </button>
      </div>
    </div>
  );
}

export default Header;
