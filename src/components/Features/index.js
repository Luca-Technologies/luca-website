import React from "react";
import Image from "next/image";
import Side from "../../Assets/Images/side.png";
import GetReadyImg from "../../Assets/Images/get-ready-img.svg";
import styled from "styled-components";

const Style = styled.div`
  .main-box {
    background: var(--primary-color);
    box-shadow: 0px -9px 250px 4px rgba(1, 196, 253, 0.41);
    border-radius: 30px;
    position: relative;
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
  .mirror img {
    width: 90% !important;
    left: -71px !important;
  }
  .features {
    color: #01b5ec;
    font-size: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
  .happy {
    position: absolute !important;
    top: 0;
    right: 0;
  }
  .title-image {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    h1 {
      text-align: left;
    }
  }
`;

export default function index() {
  return (
    <Style>
      <section className="main-box container" data-aos="fade-up">
        <div className="row p-5">
          <div className="mirror">
            <Image src={Side} alt="" objectFit={"contain"} />
          </div>
          <div className="row">
            <div className="title-image">
              <div className="title-section">
                <h3 className="mb-3 text-white">
                  Get ready to grow <br />
                  your business
                </h3>
                <p className="mb-5 text-white">
                  No more credit sales records in a notebook. All this so that
                  you can make better business decisions.
                </p>
              </div>

              <div className="" data-aos="fade-left" data-aos-duration="1000">
                <Image src={GetReadyImg} className="" alt="" />
              </div>
            </div>
            <div className="features">
              <FeatureItem
                title="Something"
                description="No more credit sales records in a notebook. All this so that you can make better business decisions"
              />
              <FeatureItem
                title="Something else"
                description="No more credit sales records in a notebook. All this so that you can make better business decisions"
              />
              <FeatureItem
                title="The third else"
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
  border-radius: 20px;
  height: 260px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(248, 248, 249, 0.8);
  backdrop-filter: blur(2px);
  display: grid;
  place-content: flex-end;
`;
const FeatureItem = ({ title, description }) => (
  <div data-aos="fade-up" data-aos-duration="100">
    <StyleFeature>
      <div className="text-white p-4">
        <h6 className="me-3 mb-2 text-white">{title}</h6>
        {description}
      </div>
    </StyleFeature>
  </div>
);
