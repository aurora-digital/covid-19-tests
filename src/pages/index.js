import React from "react";

import SEO from "root/components/SEO";
import Header from "root/components/Header";
import Layout from "root/components/Layout";
import MapExp from "root/components/MapExp";

const IndexPage = () => (
  <div>
    <SEO title="Home Page" />
    <Header />

    <Layout>
      <div style={{ height: "200px" }}>
        <MapExp />
      </div>
    </Layout>
  </div>
);

export default IndexPage;
