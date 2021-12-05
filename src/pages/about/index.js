import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import BrandMission from "../../components/BrandMission";
import Testmonies from "../../components/Testmonies";
import Footer from "../../components/Footer";
import HeaderImage from "../../Assets/Images/AboutImage.png";
import { Testimonies } from "../../Data/index";

export default function index() {
  return (
    <div>
      <Navbar />
      <Header
        h1Text="About Luca."
        p1Text={
          <>
            Luca is a simple and easy to use book-keeping tool for millions of micro and small businesses in Africa. Access the application from anywhere; sign-up and start using it in minutes.
          </>
        }
        p2Text="Luca is a simple and easy to use book-keeping tool for millions of micro and small businesses in Africa. Access the application from anywhere; sign-up and start using it in minutes.
        "
        ImageLink={HeaderImage}
        buttomBorder
      />
      <BrandMission />
      <Testmonies data={Testimonies} />
      <Footer />
    </div>
  );
}
