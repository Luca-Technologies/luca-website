import styled from "styled-components";
import React from "react";
import Image from "next/image";
//
import TitleSection from "../TitleSection";

import GoodHandImage from "./../../Assets/Images/good-hand-img.svg";
import { AiFillCheckCircle } from "react-icons/ai";

const Style = styled.div``;

export default function index() {
  return (
    <Style>
      <section className={`pt-[150px] sm:pt-10 `} data-aos="fade-up">
        <div className="container">
          <div className="flex md:flex-col justify-between">
            <div className="sm:mb-10 sm:mx-auto">
              <TitleSection
                title="You're in good hands"
                description="Seamlessly register your business with Corporate Affairs Commission (CAC) directly from the Luca App."
              />
              <div className="mt-5">
                <FeatureItem
                  title="Get registered in 7 business days"
                  description="Swift processing that is bound to blow your mind!"
                />
                <FeatureItem
                  title="For New and Existing Businesses"
                  description="Give your business the recognition it deserves. Join a thriving network of 5,000+ business owners with tools and resources to grow"
                />
                <FeatureItem
                  title="At a highly discounted rate"
                  description="For only N15,000, you get to have a CAC certified business"
                />
              </div>
            </div>
            <div
              className="max-w-[600px]"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <Image src={GoodHandImage} alt="" />
            </div>
          </div>
        </div>
      </section>
    </Style>
  );
}

const FeatureItem = ({ title, description }) => (
  <div className="flex mb-2">
    <div>
      <AiFillCheckCircle className="text-green-400" />
    </div>
    <div className="flex-grow ml-2 max-w-[300px] text-secondaryColor">
      <h6 className="text-secondaryColor font-bold">{title}</h6>
      <p className="text-secondaryColor">{description}</p>
    </div>
  </div>
);
