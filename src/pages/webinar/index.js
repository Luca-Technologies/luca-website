import React from "react";
import HeadComp from "../../components/MetaData";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { Widget } from "@typeform/embed-react";

export default function index() {
  return (
    <div>
      <HeadComp title="Luca's Business Webinar" />
      <Navbar />

      <div className="headerA" style={{ width: "100%", height: "95vh" }}>
        <Widget
          id="gR2YaNFE"
          style={{ width: "100%", height: "100%" }}
          className="my-form"
        />
      </div>

      <Footer />
    </div>
  );
}
