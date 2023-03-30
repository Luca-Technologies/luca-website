// import Image from "next/image";

import { useState } from "react";
import HeaderImage from "../Assets/Images/roll_animation.png";
// import styles from "../styles/Home.module.css";
//data
import { Testimonies } from "../Data/index";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ManagingComp from "../components/ManagingComp";
import Features from "../components/Features";
import UpgradeComp from "../components/UpgradeComp";
import DesignComp from "../components/DesignComp";
import Testmonies from "../components/Testmonies";
import Cookies from "../components/cookies";
import HeadComp from "../components/MetaData";

import Footer from "../components/Footer";
// import Logo frr

export default function Home() {
  const [hideCookies, setHideCookies] = useState(true);
  return (
    <div className={""}>
      <HeadComp title="The most trusted book-keeping app in Nigeria – Luca" />

      <Navbar />
      <Header
        h1Text="The simplest finance tool for small businesses"
        buttomBorder
      />
      <Features />
      <ManagingComp />
      <UpgradeComp />
      <DesignComp />
      <Testmonies data={Testimonies} />
      {hideCookies && (
        <Cookies handleCookies={setHideCookies} cookies={hideCookies} />
      )}

      {/* <Testimonies1 /> */}

      <Footer />
    </div>
  );
}
