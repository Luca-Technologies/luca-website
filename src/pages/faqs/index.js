import React from "react";
import HeadComp from "../../components/MetaData";
import Navbar from "../../components/Navbar";
import FAQSHeader from "../../components/FAQSHeader";
import FAQsComp from "../../components/FAQsComp";
import Footer from "../../components/Footer";
import { FAQs, FAQsFeatures } from "../../Data/index";

export default function index() {
  return (
    <div>
      <HeadComp
        title="  Luca has been designed to keep your business running smoothly, no
          matter how small it is."
      />
      <Navbar />
      <FAQSHeader />
      <FAQsComp data={FAQs} backgroundColor mainTitle="general" PaddingTop />
      <FAQsComp data={FAQsFeatures} mainTitle="features" />
      <Footer />
    </div>
  );
}
