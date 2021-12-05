import React, { useState } from "react";
// import Navbar from "../../components/Navbar";
import CareerHeader from "../../components/CareerHeader";
import Overview from "../../components/Overview";
import Application from "../../components/Application";
import Footer from "../../components/Footer copy";

export default function Index() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      {/* <Navbar /> */}
      <CareerHeader toggle={toggle} setToggle={setToggle} />
      {toggle ? (
        <Overview toggle={toggle} setToggle={setToggle} />
      ) : (
        <Application />
      )}

      <Footer />
    </div>
  );
}
