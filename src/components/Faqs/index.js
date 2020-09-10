import React from "react";
import PropTypes from "prop-types";
import Typography from "../Typography";
import { map } from "lodash";
import { withTranslation } from "../../i18n";

import styles from "./index.module.css";

/* eslint-disable id-length */
const Faqs = ({ t }) => {
  const renderItens = (itens) => {
    console.log(itens);

    return map(itens, (item) => {
      return (
        <Typography variant="body" color="klein-blue">
          {item}
        </Typography>
      );
    });
  };

  return (
    <div className={styles.root}>
      <Typography weight="bold" variant="h2" color="klein-blue">
        FAQ&#39;s
      </Typography>
      <div className={styles.content}>
        <div className={styles.faq}>
          <div className={styles.question}>
            <Typography weight="bold" variant="h3" color="klein-blue">
              {t("whoTest")}
            </Typography>
          </div>
          <div className={styles.answer}>
            <Typography variant="body" color="klein-blue">
              {t("whoTestAnswer")}
            </Typography>
          </div>
        </div>
        <div className={styles.faq}>
          <div className={styles.question}>
            <Typography weight="bold" variant="h3" color="klein-blue">
              {t("whoPatients")}
            </Typography>
          </div>
          <div className={styles.answer}>
            <Typography variant="body" color="klein-blue">
              {t("whoPatientsAnswer1")}
            </Typography>
            {renderItens(t("whoPatientsAnswerItens", { returnObjects: true }))}
            <Typography variant="body" color="klein-blue">
              {t("whoPatientsAnswer2")}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

Faqs.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("faqs")(Faqs);
