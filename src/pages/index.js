// import Image from "next/image";

import { useState } from "react";
// import styles from "../styles/Home.module.css";
//data
import { Testimonies } from "../Data/index";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Features from "../components/Features";
import LeftTextRightImage from "../components/LeftTextRightImage";
import Testmonies from "../components/Testmonies";
import Cookies from "../components/cookies";
import HeadComp from "../components/MetaData";
import FAQ from "../components/FAQ";

import Footer from "../components/Footer";
// import Logo frr
// images
import ComponentImage from "./../Assets/Images/keep-track-img.svg";
import ManageDebtImage from "./../Assets/Images/manage-debt.svg";
import DownloadAppImage from "./../Assets/Images/download-app.svg";
import InventoryManagementImage from "./../Assets/Images/inventory-management.svg";

export default function Home() {
  const [hideCookies, setHideCookies] = useState(true);
  return (
    <div className={""}>
      <HeadComp title="The most trusted book-keeping app in Nigeria – Luca" />

      <Navbar />
      <Header
        h1Text="The Simplest Finance and Bookkepping Tool for Your Business"
        buttomBorder
      />
      <Features />
      <LeftTextRightImage
        title="Keep track of your business finances"
        description="Track every single Naira that your business makes and spends. Track every single Naira that your business makes and spends."
        image={ComponentImage}
      />
      <LeftTextRightImage
        title="Manage debts from your customers"
        description="Know who owes you more, and send prompt reminders to your debtors with the Luca debt tracker."
        image={ManageDebtImage}
      />
      <LeftTextRightImage
        title="Inventory Management like the pros do"
        description="Log your current inventory into the Luca App to manage your stock easily. Just add stock, we'll do the rest."
        image={InventoryManagementImage}
      />
      <FAQ />
      <Testmonies data={Testimonies} />
      {hideCookies && (
        <Cookies handleCookies={setHideCookies} cookies={hideCookies} />
      )}
      <LeftTextRightImage
        title="Do more with your Business. Get Luca today"
        showAppStoreButtons={true}
        className="pb-0"
        id="get-luca"
        description="Download the Luca app today and begin your business growth journey like a champ!"
        image={DownloadAppImage}
      />

      {/* <Testimonies1 /> */}

      <Footer />
    </div>
  );
}
