import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MapExp from "../components/MapExp";
import { withTranslation } from "../i18n";

import styles from "./index.module.css";

/* eslint-disable id-length */
function Home({ t }) {
  const [labs, setLabs] = useState([]);

  async function fetchLabs() {
    const result = await axios.get(
      "https://auroradigital-covid-labs.herokuapp.com/api/labs",
    );

    setLabs(result.data);
  }

  useEffect(() => {
    fetchLabs();
  }, []);

  return (
    <div className={styles.root}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="description" content={t("description")} />
        <meta property="og:title" content={t("title")} key="ogtitle" />
        <meta
          property="og:description"
          content={t("description")}
          key="ogdesc"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta
          name="twitter:creator"
          content="@AuroraDigitalH1"
          key="twhandle"
        />

        {/* Open Graph */}
        <meta
          property="og:url"
          content="https://covid19.auroradigital.co"
          key="ogurl"
        />
        <meta property="og:image" content="/preview.png" key="ogimage" />
        <meta property="og:site_name" content={t("title")} key="ogsitename" />
        <meta property="og:title" content={t("title")} key="ogtitle" />
        <meta
          property="og:description"
          content={t("description")}
          key="ogdesc"
        />

        <title>{t("title")}</title>
      </Head>
      <div className={styles.header}>
        <Header />
      </div>

      <div className={styles.container}>
        <section id="map" className={styles.map}>
          <MapExp
            update={labs[0] ? labs[0].updated : null}
            locations={labs.slice(1)}
          />
        </section>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
      <style jsx global>
        {`
          body {
            margin: 0px;
            padding: 0px;
          }
        `}
      </style>
    </div>
  );
}

Home.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("header")(Home);
