import styled from "styled-components";
import React from "react";
//
import TitleSection from "../TitleSection";
import Link from "next/link";

const Style = styled.div`
  .special-item {
    background: linear-gradient(
      90.05deg,
      rgba(1, 196, 253, 0) 0.04%,
      rgba(1, 196, 253, 0.05) 52.54%,
      rgba(1, 196, 253, 0) 99.97%
    );
  }
`;

export default function index() {
  return (
    <Style>
      <section className={`pt-[150px] sm:pt-10 `} data-aos="fade-up">
        <div className="container">
          <div className="sm:mb-10 sm:mx-auto text-center max-w-[300px] m-auto">
            <TitleSection
              isFullWidth={true}
              title="Simple Affordable"
              description="Ready to register your business with CAC? Create an account with Luca today and take the first step towards building a successful business!"
            />
            <div className="mt-5 ">
              <FeatureItems
                price="20,000"
                items={[
                  "Sole Proprietorship Registration",
                  "7 business-day delivery",
                  "24/7 Customer Support",
                  "Download CAC Certificate for free",
                  "Prompt Updates",
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </Style>
  );
}

const FeatureItems = ({ price, items = [] }) => (
  <div>
    <div className="rounded-lg font-bold bg-opacity-10 p-4 bg-primaryColor text-primaryColor text-3xl">
      ₦{price}
    </div>
    <div>
      {items.map((item, index) => (
        <p
          key={index}
          className={`py-4 m-0 text-secondaryColor ${
            index % 2 === 0 ? "" : "special-item"
          }`}
        >
          {item}
        </p>
      ))}
      <Link href="/#get-luca">
        <button className="rounded-lg p-3 bg-primaryColor w-full font-bold my-5 text-white">
          Get Started
        </button>
      </Link>
    </div>
  </div>
);
