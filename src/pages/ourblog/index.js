import React from "react";
import Navbar from "../../components/Navbar";
import ReadBlog from "../../components/ReadBlog";
import BlogList from "../../components/BlogList";
import { blogOthers } from "../../Data/index";
import Footer from "../../components/Footer";

export default function index() {
  return (
    <div>
      <Navbar />
      <ReadBlog />
      <BlogList blogList2={blogOthers} blogListTitle={"Recent Post"} />
      <Footer />
    </div>
  );
}
