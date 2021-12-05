import React from "react";
import Image from "next/image";
import HeaderImage from "../../Assets/Images/headerImage.png";
import GooglePlay from "../../Assets/Images/Elements/Buttons/Market/Google Play.png";
import GooglePlayNew from "../../Assets/Images/button1.svg";
import AppStoreNew from "../../Assets/Images/button2.svg";
import AppStore from "../../Assets/Images/Elements/Buttons/Market/App Store.png";

import styled from "styled-components";

const Style = styled.div`
  .bold {
    font-weight: bold;
  }
  padding-top: 5rem;
  .header .lucas-image-home {
    width: 90%;
  }
  h1 {
    font-size: 49px;
    font-weight: 900;
  }
  p {
    color: #959595;
    font-weight: 500;
  }

  .header button {
    border: none;
    background-color: transparent !important;
  }
  .header .headerImage img {
    width: 70%;
  }
  .header .info {
    background: #edfbff;
  }
  .features {
    color: #01b5ec;
    font-size: 15px;
  }
  .happy {
    width: 70%;
  }
  .row {
    z-index: 1000;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul li a {
    color: #01b5ec !important;
    font-weight: bold;
    /* letter-spacing: 1px; */
  }
  .info {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
  .info h4 {
    font-weight: 900 !important;
    color: #01b5ec;
  }
  .info button {
    padding: 7px 19px;
    color: #ffff;
    background: #01b5ec !important;
    border: 1px solid #01b5ec;
    border-radius: 9px;
    font-size: 15px;
  }

  @media (max-width: 768px) {
    p {
      text-align: center;
    }
    ul {
      text-align: center;
    }
  }
`;

export default function index({
  h1Text,
  p1Text,
  p2Text,
  ImageLink,
  buttonToogle,
  buttomBorder,
}) {
  return (
    <Style>
      <section className="header ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 " data-aos="fade-down">
              <h1 className="mb-3 mb-md-4">{h1Text}</h1>
              <div className="pe-md-4">
                <p className="mb-5 pe-md-5 d-none d-md-block">{p1Text}</p>
                <p className="mb-5 pe-md-4 d-md-none">{p2Text}</p>
              </div>
              {!buttonToogle ? (
                <div
                  className="d-flex justify-content-center justify-content-md-start align-items-center "
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <button className="mr-3">
                    <Image src={GooglePlayNew} alt="" className="img-fluid" />
                  </button>
                  <button>
                    <Image src={AppStoreNew} alt="" className="img-fluid" />
                  </button>
                </div>
              ) : (
                <div>
                  <ul>
                    <li className="mb-2">
                      <a href="#contact">Phone: 070 00 880 880</a>
                    </li>
                    <li>
                      <a href="#contact">Email: hello@luca.africa</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="col-md-6 mt-5 mt-lg-0 d-flex justify-content-center">
              <div className="lucas-image-home">
                <Image src={ImageLink} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* {buttomBorder && (
          <div className="info d-flex align-items-center justify-content-between py-4 px-3 d-block d-md-none">
            <div className="d-flex align-items-center">
              <div className="headerImage text-center">
                <Image src={HeaderImage} alt="" />
              </div>
              <h4>LUCA</h4>
            </div>
            <div>
              <button className="btn-md">Get Luca</button>
            </div>
          </div>
        )} */}
      </section>
    </Style>
  );
}
