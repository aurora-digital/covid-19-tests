import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Faqs from "../components/Faqs";
import MapExp from "../components/MapExp";

import styles from "./index.module.css";

export default function Home() {
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
      <Header />
      <div className={styles.container}>
        <section id="map" className={styles.map}>
          <MapExp locations={labs} />
        </section>
        <section id="faqs">
          <Faqs />
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
