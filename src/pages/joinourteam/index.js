import React from "react";
import HeadComp from "../../components/MetaData";
import Navbar from "../../components/Navbar";
import JoinHeader from "../../components/JoinHeader";
import Position from "../../components/Position";
import Footer from "../../components/Footer";

const vacancy = [
  // {
  //   id: 1,
  //   position: "Digital Marketer",
  //   type: "remote",
  //   date: "Posted 9 days ago",
  // },
  // {
  //   id: 2,
  //   position: "Software Testerr",
  //   type: "remote",
  //   date: "Posted 9 days ago",
  // },
];

export default function index() {
  return (
    <div>
      <HeadComp
        title=" We are committed to improving the lives of people and businesses by
          streamlining and automating bookkeeping"
      />

      <Navbar />
      <JoinHeader />
      <Position vacancy={vacancy} />
      <Footer />
    </div>
  );
}
