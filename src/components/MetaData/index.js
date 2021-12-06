import React from "react";
import Head from "next/head";
export default function index({ title }) {
  return (
    <div>
      <Head>
        <title>{title} </title>
      </Head>
    </div>
  );
}
