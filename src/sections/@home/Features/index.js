import styled from "styled-components";
import React from "react";
import Image from "next/image";
//
import Side from "../../../Assets/Images/side.png";
import GetReadyImg from "../../../Assets/Images/get-ready-img.svg";
import GetReadyStyleImg from "../../../Assets/Images/get-ready-style.svg";
import TitleSection from "../../../components/TitleSection";

const Style = styled.div`
  .main-box {
    background: var(--primary-color);
    box-shadow: 0px -9px 250px 4px rgba(1, 196, 253, 0.41);
    border-radius: 30px;
    max-height: 800px;
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
    grid-template-columns: 1fr 1fr;
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
      <section id="features" className="main-box container" data-aos="fade-up">
        <div className="row main-container mx-auto">
          <div className="mirror sm:hidden">
            <Image src={Side} alt="" objectFit={"contain"} />
          </div>
          <div className="absolute sm:relative top-0 z-0 w-[400px]  h-[100px] sm:hidden">
            <Image src={GetReadyStyleImg} alt="" objectFit={"contain"} />
          </div>
          <div className="row z-10">
            <div className="title-image">
              <TitleSection
                isWhiteTheme={true}
                title="Get ready to grow your business"
                description="No more credit sales records in a notebook. All this so that
                you can make better business decisions."
              />

              <div
                className="w-[400px] sm:w-auto"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <Image src={GetReadyImg} alt="" objectFit={"contain"} />
              </div>
            </div>
            <div
              className="features !-mt-[400px] relative"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <FeatureItem
                title="Save Time"
                description="Efficiently track your business transactions. Spend less time on paperwork and more time growing your business"
              />
              <FeatureItem
                title="Detailed Business Insights"
                description="Generate reports to gain deep insights into your financial data in real-time, so you can make informed decisions"
              />
            </div>
          </div>
        </div>
      </section>
    </Style>
  );
}

const StyleFeature = styled.div`
  border-radius: 20px;
  height: 260px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(248, 248, 249, 0.8);
  backdrop-filter: blur(2px);
  display: grid;
  place-content: flex-end;
`;
const FeatureItem = ({ title, description }) => (
  <div>
    <StyleFeature>
      <div className="text-white p-4">
        <h6 className="me-3 mb-2 text-white">{title}</h6>
        {description}
      </div>
    </StyleFeature>
  </div>
);
