import React from "react";
import PropTypes from "prop-types";
import { map } from "lodash";
import Typography from "../Typography";
import { withTranslation } from "../../i18n";

import styles from "./index.module.css";

/* eslint-disable id-length */
const Faqs = ({ t }) => {
  const renderItens = (itens) => {
    return map(itens, (item) => {
      return (
        <li className={styles.item}>
          <Typography variant="body" color="klein-blue">
            {item}
          </Typography>
        </li>
      );
    });
  };

  return (
    <div className={styles.root}>
      <Typography weight="bold" variant="h2" color="klein-blue">
        FAQ&#39;s
      </Typography>
      <div>
        <Typography variant="body" color="klein-blue">
          {t("source")}
        </Typography>
      </div>
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
        <div className={styles.faq}>
          <div className={styles.question}>
            <Typography weight="bold" variant="h3" color="klein-blue">
              {t("where")}
            </Typography>
          </div>
          <div className={styles.answer}>
            <Typography variant="body" color="klein-blue">
              {t("whereAnswer")}
            </Typography>
            {renderItens(t("whereAnswerItens", { returnObjects: true }))}
          </div>
        </div>
        <div className={styles.faq}>
          <div className={styles.question}>
            <Typography weight="bold" variant="h3" color="klein-blue">
              {t("which")}
            </Typography>
          </div>
          <div className={styles.answer}>
            <Typography variant="body" color="klein-blue">
              {t("whichAnswer")}
            </Typography>
          </div>
        </div>
        <div className={styles.faq}>
          <div className={styles.question}>
            <Typography weight="bold" variant="h3" color="klein-blue">
              {t("how")}
            </Typography>
          </div>
          <div className={styles.answer}>
            <Typography variant="body" color="klein-blue">
              {t("howAnswer")}
            </Typography>
          </div>
        </div>
        <div className={styles.faq}>
          <div className={styles.question}>
            <Typography weight="bold" variant="h3" color="klein-blue">
              {t("why")}
            </Typography>
          </div>
          <div className={styles.answer}>
            <Typography variant="body" color="klein-blue">
              {t("whyAnswer")}
            </Typography>
          </div>
        </div>
        <div className={styles.faq}>
          <div className={styles.question}>
            <Typography weight="bold" variant="h3" color="klein-blue">
              {t("ifCough")}
            </Typography>
          </div>
          <div className={styles.answer}>
            <Typography variant="body" color="klein-blue">
              {t("ifCoughAnswer")}
            </Typography>
          </div>
        </div>
        <div className={styles.faq}>
          <div className={styles.question}>
            <Typography weight="bold" variant="h3" color="klein-blue">
              {t("receivedIndication")}
            </Typography>
          </div>
          <div className={styles.answer}>
            <Typography variant="body" color="klein-blue">
              {t("receivedIndicationAnswer1")}
            </Typography>
            {renderItens(
              t("receivedIndicationAnswerItens", { returnObjects: true }),
            )}
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
