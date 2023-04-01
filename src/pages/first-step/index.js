// import Image from "next/image";

import { useState } from "react";
// import styles from "../styles/Home.module.css";
//data
import { Testimonies } from "../../Data/index";

import Navbar from "../../components/Navbar";
import Header from "../../sections/@firstStep/Header";
import FeaturesFirstStep from "../../sections/@firstStep/FeaturesFirstStep";
import GoodHands from "../../sections/@firstStep/GoodHands";
import SimpleAffordable from "../../components/SimpleAffordable";
import Testmonies from "../../components/Testmonies";
import HeadComp from "../../components/MetaData";
import FAQ from "../../components/FAQ";

import Footer from "../../components/Footer";
// import Logo frr
// images

export default function Home() {
  return (
    <div className={""}>
      <HeadComp title="The most trusted book-keeping app in Nigeria – Luca" />

      <Navbar />
      <Header
        h1Text="Take the First Step. Register your business with CAC."
        buttomBorder
      />
      <FeaturesFirstStep />
      <GoodHands />
      <SimpleAffordable />
      <FAQ />
      <Testmonies data={Testimonies} />

      <Footer />
    </div>
  );
}
