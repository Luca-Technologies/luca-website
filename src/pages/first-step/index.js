// import Image from "next/image";

import { useState } from "react";
// import styles from "../styles/Home.module.css";
//data
import { Testimonies } from "../../Data/index";

import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import FeaturesFirstStep from "../../components/FeaturesFirstStep";
import GoodHands from "../../components/GoodHands";
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
        h1Text="The Simplest Finance and Bookkepping Tool for Your Business"
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
