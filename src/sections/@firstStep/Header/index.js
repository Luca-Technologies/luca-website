import React from "react";
import styled from "styled-components";
import Image from "next/image";
//
import BannerImage from "../../../Assets/Images/first-step-banner-img.svg";

const Style = styled.div`
  .bold {
    font-weight: bold;
  }
  h1 {
    font-size: 49px;
    font-weight: 900;
  }
`;

export default function index({ h1Text }) {
  return (
    <Style>
      <section className="header">
        <div className="container">
          <div className="flex md:flex-col space-x-5 justify-between items-center">
            <div className="sm:mb-10 sm:mx-auto max-w-[520px] sm:mt-10">
              <h1 className="mb-3 mb-md-4 !text-secondaryColor">{h1Text}</h1>
              <p className="text-secondaryColor sm:text-center">
                Give your business legal recognition by registering with the CAC
                (Corporate Affairs Commission). Luca takes the hassle out of the
                registration process
              </p>
            </div>
            <div
              className="max-w-[600px] sm:hidden ml-5"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <Image src={BannerImage} alt="" />
            </div>
          </div>
        </div>
      </section>
    </Style>
  );
}
