import React from "react";
import PropTypes from "prop-types";
import Typography from "../Typography";
import { i18n, withTranslation } from "../../i18n";

import styles from "./index.module.css";

/* eslint-disable id-length */
function Header({ t }) {
  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "pt" : "en");
  };

  return (
    <div className={styles.header}>
      <Typography variant="h2">{t("pageTitle")}</Typography>
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

Header.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("header")(Header);
