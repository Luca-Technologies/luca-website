import React from "react";
import Navbar from "../../components/Navbar";
import FAQSHeader from "../../components/FAQSHeader";
import FAQsComp from "../../components/FAQsComp";
import Footer from "../../components/Footer";
import { FAQs, FAQsFeatures } from "../../Data/index";

export default function index() {
  return (
    <div>
      <Navbar />
      <FAQSHeader />
      <FAQsComp data={FAQs} backgroundColor mainTitle="general" PaddingTop />
      <FAQsComp data={FAQsFeatures} mainTitle="features" />
      <Footer />
    </div>
  );
}
