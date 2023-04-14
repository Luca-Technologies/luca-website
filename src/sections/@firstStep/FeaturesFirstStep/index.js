import styled from "styled-components";
import React from "react";
import Image from "next/image";
import { MdEditDocument } from "react-icons/md";
//
import Side from "../../../Assets/Images/side.png";
import GetReadyStyleImg from "../../../Assets/Images/get-ready-style.svg";
import TitleSection from "../../../components/TitleSection";
import Md1Support from "../../../Assets/Images/mdi_support.svg";
import ImageNaira from "../../../Assets/Images/naira.svg";
import ImageEdit from "../../../Assets/Images/edit-icon.svg";

const Style = styled.div`
  .main-box {
    background: var(--primary-color);
  }
  .title-section {
    max-width: 300px;
  }
  .mirror {
    position: absolute;
    left: -15px;
    bottom: -56px;
    z-index: 0;
  }

  .features {
    color: #01b5ec;
    font-size: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
  .title-image {
    display: flex;
    justify-content: space-between;
  }
  .main-container {
    padding: 3rem;
  }
  @media (max-width: 868px) {
    h1 {
      text-align: left;
    }
    .title-image {
      flex-direction: column;
    }
    .main-container {
      padding: 0;
    }
  }
  @media (max-width: 568px) {
    h1 {
      text-align: left;
    }
    .main-box {
      max-height: inherit;
    }
    .features {
      grid-template-columns: 1fr;
    }
    .title-image {
      flex-direction: column;
    }
    .main-container {
      padding: 0;
    }
  }
`;

export default function index() {
  return (
    <Style>
      <section
        id="features"
        className="main-box container-fluid"
        data-aos="fade-up"
      >
        <div className="row main-container mx-auto">
          <div className="mirror sm:hidden">
            <Image src={Side} alt="" objectFit={"contain"} />
          </div>
          <div className="absolute sm:relative top-0 z-0 w-[400px]  h-[100px] sm:hidden">
            <Image src={GetReadyStyleImg} alt="" objectFit={"contain"} />
          </div>
          <div className="container">
            <div className="title-image">
              <TitleSection
                isWhiteTheme={true}
                title="We dey for you"
                description="We do all the hard work so that you can focus on what you do best - growing your business.."
              />
            </div>
            <div
              className="features relative mt-20"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <FeatureItem
                title="Simple Registration"
                icon={ImageEdit}
                description="Registering your business with CAC is easy with Luca! Provide some basic information about your business and we take care of the rest."
              />
              <FeatureItem
                title="Affordable Pricing"
                icon={ImageNaira}
                description="We offer a budget-friendly pricing for business registration, so you can save money while still getting top-quality service. "
              />
              <FeatureItem
                title="Expert Support"
                icon={Md1Support}
                description="Our team of friendly experts is always  dedicated to ensuring your business is registered smoothly and stress-free."
              />
            </div>
          </div>
        </div>
      </section>
    </Style>
  );
}

const StyleFeature = styled.div`
  display: grid;
  place-content: flex-end;
`;
const FeatureItem = ({ title, icon, description }) => (
  <div>
    <StyleFeature>
      {icon && (
        <div className="bg-white grid place-items-center bg-opacity-50 w-[50px] h-[50px] rounded-md mb-3">
          <Image src={icon} />
        </div>
      )}
      <div className="text-white">
        <h6 className="me-3 mb-2 text-white">{title}</h6>
        {description}
      </div>
    </StyleFeature>
  </div>
);
