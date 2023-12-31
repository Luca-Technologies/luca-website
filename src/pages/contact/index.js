import React from "react";
import HeadComp from "../../components/MetaData";

import Navbar from "../../components/Navbar";
import Header from "../../sections/@home/Header";
import Testmonies from "../../components/Testmonies";
import Footer from "../../components/Footer";
import HeaderImage from "../../Assets/Images/ContactImage.png";
import { Testimonies } from "../../Data/index";

export default function index() {
  return (
    <div>
      <HeadComp
        title=" Let&#39;s design your perfect accounting app. Let&#39;s start with
          this."
      />

      <Navbar />
      <Header
        h1Text="Contact us"
        buttonToogle
        p1Text={
          <>
            Reach us via our support number to get assistance using our
            products. We’ll be happy to answer all your questions or inquiries.
          </>
        }
        p2Text="Reach us via our support number to get assistance using our products. We’ll be happy to answer all your questions or inquiries."
        ImageLink={HeaderImage}
      />
      <Testmonies data={Testimonies} />
      <Footer />
    </div>
  );
}
