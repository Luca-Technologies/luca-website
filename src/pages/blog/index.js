import React from "react";
import Navbar from "../../components/Navbar";
import BlogHeader from "../../components/BlogHeader";
import BlogList from "../../components/BlogList";

import Footer from "../../components/Footer";

import { blogMain, blogList, blogOthers } from "../../Data/index";

export default function index() {
  return (
    <div>
      <Navbar />
      <BlogHeader />
      {/* <BlogList
        // blogMain={blogMain}
        // blogList={blogList}
        // blogList2={blogOthers}
      /> */}
      <Footer />
    </div>
  );
}
