import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import { map } from "lodash";
import MapExp from "../components/MapExp";
import styles from "./index.module.css";

const labs = [
  "Rua D. Moisés Alves de Pinho 4900-314 Viana do Castelo",
  "Avenida Dr. Tito Fontes, nº 31 4930-673 Valença",
  "Rua Dr. Félix Alves Pereira, nº 177 4970-456 Arcos de Valdevez",
  "Hospital da Misericórdia de Ponte da Barca, Praça da República 4980-619 Ponte da Barca",
  "Largo da Feira 4925-411 Lanheses",
  "Rua de Altamira, nº 53 r/c 4900-337 Viana do Castelo",
  "Rua 5 de Outubro nº 103A, r/c D 4910-456 Vila Praia de Âncora",
  "Estrada dos Arcos, Edf. Avenida, Bloco1, loja 4 4950-436 Monção",
  "Santa Casa da Misericórdia de Monção, Barreiras, Mazedo 4950-277 Mazedo",
];

export default function Home() {
  //const [labs, setLabs] = useState(null);

  useEffect(() => {
    async function fetchCoordinates(addressesList) {
      const addressesCoordinates = map(addressesList, (address) => {
        try {
          const data = axios.get(
            "https://maps.googleapis.com/maps/api/geocode/json",
            {
              params: {
                key: process.env.GOOGLE_KEY,
                address,
              },
            },
          );

          console.log(address, data);

          return data;
        } catch (error) {
          return console.error(error);
        }
      });

      console.log(addressesCoordinates);
    }

    async function fetchLabs() {
      const cors = "https://cors-anywhere.herokuapp.com/";
      //  https://api.mapbox.com/geocoding/v5/mapbox.places/${labs[0]}.json?access_token=${process.env.MAPBOX_TOKEN}&country=portugal&language=pt,

      try {
        const config = {
          headers: { "Access-Control-Allow-Origin": "*" },
        };

        const data = axios(
          `${cors}https://auroradigital-covid-labs.herokuapp.com/api/labs`,
          config,
        );

        console.log(data);
      } catch (error) {
        return console.error(error);
      }
    }
    fetchCoordinates(labs);
  }, []);

  return (
    <div className={styles.root}>
      <Head>
        <title>Covid-19 tests</title>
      </Head>

      <div className={styles.container}>
        <MapExp />
      </div>
    </div>
  );
}
