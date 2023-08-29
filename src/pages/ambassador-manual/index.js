import React from "react";
import HeadComp from "../../components/MetaData";
import Navbar from "../../components/Navbar";
import Amb_Manual_Header from "../../components/Amb_Manual_Header";
import Amb_Manual_Comp from "../../components/Amb_Manual_Comp";
import FAQsComp from "../../components/FAQsComp";

import styled from "styled-components";

import Footer from "../../components/Footer";
import { AboutLuca, OnboardinNewMerchant } from "../../Data/index";

const Style = styled.div`
  .title {
    color: #01b5ec;
    letter-spacing: 3px;
  }
`;

export default function index() {
  return (
    <div>
      <HeadComp
        title="  Luca has been designed to keep your business running smoothly, no
          matter how small it is."
      />
      <Navbar />
      <Amb_Manual_Header />
      <FAQsComp
        data={AboutLuca}
        backgroundColor
        mainTitle="About Luca Ambassador"
        PaddingTop
      />
      <Amb_Manual_Comp
        data={OnboardinNewMerchant}
        backgroundColor
        mainTitle="Subscribing & onboarding a new merchant"
      />
      <p className="container text-justify">
        This procedure just serves as a guide to ensure the Luca Ambassador
        takes all the necessary steps in dealing with the Luca Merchant as
        related to subscription.
      </p>

      <Style>
        <div className="container mb-1">
          <p className="text-uppercase title">Merchant Payment</p>
        </div>

        <p className="container text-justify">
          All subscription payments are online and through the app. No cash
          payment is permitted by the Luca Ambassador. For Staff Management
          Module, once an initial 7 days free trial elapses, the App display a
          pop-up notification with a subscription button. The merchant can
          subscribe by paying online. This is an automatic process with no human
          interference.
        </p>

        <p className="container text-justify">
          <span className="font-bold text-black">Appearance:</span>
          <br />
          As a Luca Ambassador you are an ambassador that represents the brand
          everywhere you go. At all times Luca Ambassadors should ensure they
          dress smartly when going to recommend Luca Africa app to small
          businesses such as Pharmacies, Supermarkets and Beauty Salon.
        </p>

        <p className="container text-justify">
          <span className="font-bold text-black">
            Luca Ambassador Communication Platform:
          </span>{" "}
          <br />
          As soon as you register for the Luca Ambassador program and you are
          approved, you get notification by email and via SMS. All your
          merchants’ activities will also be reported weekly via email and SMS
          in a dashboard for your easy access to track all your
          stores/merchants, your earnings/payouts, etc.
        </p>

        <p className="container text-justify">
          <span className="font-bold text-black">Payout:</span> <br />
          Payout is when your commission is paid directly into your registered
          personal bank account. Payouts are carried out weekly every Friday at
          4pm.
        </p>

        <p className="container text-justify">
          <span className="font-bold text-black">
            Luca Last-Mile Ambassador Town-Hall Meeting:
          </span>{" "}
          <br />
          As a dedicated Luca ambassador, you will be invited to monthly
          town-hall meeting to share progress, concerns, challenges and way
          forward with the Luca leadership team and also be invited as part of
          the Luca Advisory Council based on your performance.
        </p>
      </Style>
      <br />
      <br />
      <Footer />
    </div>
  );
}
