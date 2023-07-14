import React from "react";
import Head from "next/head";
export default function index({ title }) {
  return (
    <div>
      <Head>
        <title>{title} </title>
        <meta name="description" content="Luca Africa allows you to see every transaction, and analyze your financials in real-time." />

        <meta property="og:url" content="https://luca.africa/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Luca Africa allows you to see every transaction, and analyze your financials in real-time." />
        <meta property="og:image" content="https://pbs.twimg.com/profile_images/1633863379734364166/NhBjODvC_400x400.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="luca.africa" />
        <meta property="twitter:url" content="https://luca.africa/" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content="Luca Africa allows you to see every transaction, and analyze your financials in real-time." />
        <meta name="twitter:image" content="https://pbs.twimg.com/profile_images/1633863379734364166/NhBjODvC_400x400.png" />

      </Head>
    </div>
  );
}
