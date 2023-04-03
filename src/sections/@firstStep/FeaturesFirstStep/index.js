import styled from "styled-components";
import React from "react";
import Image from "next/image";
//
import Side from "../../../Assets/Images/side.png";
import GetReadyStyleImg from "../../../Assets/Images/get-ready-style.svg";
import TitleSection from "../../../components/TitleSection";

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
                title="Start with the basics"
                description="No paperwork or legal headaches. Apply to register your small business and we will get your cetificate delivered."
              />
            </div>
            <div
              className="features  relative"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <FeatureItem
                title="Save Time"
                description="No more credit sales records in a notebook. All this so that you can make better business decisions"
              />
              <FeatureItem
                title="Detailed Business Insights"
                description="No more credit sales records in a notebook. All this so that you can make better business decisions"
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
const FeatureItem = ({ title, description }) => (
  <div>
    <StyleFeature>
      <div className="bg-white bg-opacity-50 w-full h-[150px] rounded-md mb-3"></div>
      <div className="text-white">
        <h6 className="me-3 mb-2 text-white">{title}</h6>
        {description}
      </div>
    </StyleFeature>
  </div>
);
