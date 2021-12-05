// import Head from "next/head";
// import Image from "next/image";

import { useState } from "react";
import HeaderImage from "../Assets/Images/roll_animation.png";
// import styles from "../styles/Home.module.css";
//data
import { Testimonies } from "../Data/index";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ManagingComp from "../components/ManagingComp";
import UpgradeComp from "../components/UpgradeComp";
import DesignComp from "../components/DesignComp";
import Testmonies from "../components/Testmonies";
import Cookies from "../components/cookies";

import Footer from "../components/Footer";
// import Logo frr

export default function Home() {
  const [hideCookies, setHideCookies] = useState(true);
  return (
    <div className={""}>
     
      <Navbar />
      <Header
        h1Text=" Keep Track. Grow Prosperity"
        p1Text={
          <>
            <span className="bold font-weight-bold">Offline First.</span>
            Luca helps you record all business financial transactions more
            efficiently with no or low internet speeds and minimum data-usage.
          </>
        }
        p2Text="Luca helps you manage your business finances from a single page
        dashboard. it will automatically calculate balance, profit and
        loss, etc for you with just a few clicks."
        ImageLink={HeaderImage}
        buttomBorder
      />
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
