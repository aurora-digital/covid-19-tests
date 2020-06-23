import React from "react";
import MapExp from "../components/MapExp";
import Footer from "../components/Footer";
import Header from "../components/Header";

import styles from "./index.module.css";

export default function Home() {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.container}>
        <div>
          <MapExp />
        </div>
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
