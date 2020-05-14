import React from "react";
import PropTypes from "prop-types";
import SEO from "root/components/SEO";
import Header from "root/components/Header";
import Layout from "root/components/Layout";
import MapExp from "root/components/MapExp";
import Typography from "root/components/Typography";
import withTrans from "root/i18n/withTrans";

/* eslint-disable id-length */
const IndexPage = ({ t }) => (
  <div>
    <SEO title="Home Page" />
    <Header />

    <Layout>
      <Typography>{t("hero.title")}</Typography>
      <div style={{ height: "200px" }}>
        <MapExp />
      </div>
    </Layout>
  </div>
);

IndexPage.propTypes = {
  t: PropTypes.func.isRequired,
};
/* eslint-enable id-length */

export default withTrans(IndexPage);
