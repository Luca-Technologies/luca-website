import React from "react";
import Image from "next/image";
import GooglePlayNew from "../../Assets/Images/button1.svg";
import AppStoreNew from "../../Assets/Images/button2.svg";
import Side from "../../Assets/Images/side.png";
import PhoneImage from "../../Assets/Images/phone3.png";
import styled from "styled-components";
import { IoMdCheckmark } from "react-icons/io";

const Style = styled.div`
  .desgin {
  }
  .design button {
    border: none;
    background-color: transparent;
  }
  @media (max-width: 1200px) {
    br {
      display: none;
    }
  }
`;

export default function index() {
  return (
    <Style>
      <section className="design">
        <div className="container-fluid">
          <div className="row mx-md-5">
            <div className="col-md-6 order-3 order-md-0" data-aos="fade-right">
              <div>
                <Image src={PhoneImage} alt="" />
              </div>
            </div>
            <div className="col-md-6 pt-6 order-0 order-md-3">
              <h3 className="mb-5" data-aos="fade-left" data-duration="100">
                Luca is designed for millions of <br />
                micro and small businesses in Africa
              </h3>
              <p className="mb-5" data-aos="fade-left" data-duration="1000">
              Luca is designed to help small businesses keep their 
              financials in order and allow them to easily generate documents to secure loans.
              </p>
              <div className="d-flex" data-aos="fade-up" data-duration="1000">
                <button className="mr-3">
                  <Image src={GooglePlayNew} alt="" className="img-fluid" />
                </button>
                <button>
                  <Image src={AppStoreNew} alt="" className="img-fluid" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Style>
  );
}
