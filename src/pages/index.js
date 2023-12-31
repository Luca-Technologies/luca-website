import { useState } from "react";

//data
import { Testimonies } from "../Data/index";

import Navbar from "../components/Navbar";
import Header from "../sections/@home/Header";
import Features from "../sections/@home/Features";
import LeftTextRightImage from "../components/LeftTextRightImage";
import Testmonies from "../components/Testmonies";
import Cookies from "../components/cookies";
import HeadComp from "../components/MetaData";
import FAQ from "../components/FAQ";

import Footer from "../components/Footer";

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
        h1Text="The Simplest Finance and Bookkeeping Tool for Your Business"
        buttomBorder
      />
      <Features />
      <LeftTextRightImage
        title="Keep track of your business finances"
        description="Track every single Naira that your business makes and spends. Stay on top of your business finances by understanding your cash flow and financial health"
        image={ComponentImage}
        id="bookkeeping"
      />
      <LeftTextRightImage
        title="Manage debts from your customers"
        description="Know who owes you money, and send prompt reminders to your debtors with the Luca debt tracker."
        image={ManageDebtImage}
        id="debt-tracking"
      />
      <LeftTextRightImage
        title="Inventory Management like the pros do"
        description="Log your current inventory into the Luca App to manage your stock easily. Just add stock, we’ll do the rest."
        image={InventoryManagementImage}
        id="inventory-management"
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

      <Footer />
    </div>
  );
}
