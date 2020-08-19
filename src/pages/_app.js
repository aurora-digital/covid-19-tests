import React from "react";
import PropTypes from "prop-types";
import App from "next/app";
import { appWithTranslation } from "../i18n";

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

MyApp.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.shape().isRequired,
};

export default appWithTranslation(MyApp);
