import React from "react";
import Head from "next/head";
import MapExp from "../components/MapExp";
import Footer from "../components/Footer";
import styles from "./index.module.css";

export default function Home() {
  return (
    <div className={styles.root}>
      <Head>
        <title>Covid-19 tests</title>
      </Head>

      <div className={styles.container}>
        <MapExp />
      </div>
      <Footer></Footer>
    </div>
  );
}
