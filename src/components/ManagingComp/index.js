import React from "react";
import Image from "next/image";
import GooglePlay from "../../Assets/Images/Elements/Buttons/Market/Google Play.png";
import Side from "../../Assets/Images/side.png";
import PhoneImage from "../../Assets/Images/phone1.png";
import styled from "styled-components";
import { IoMdCheckmark } from "react-icons/io";

const Style = styled.div`
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
  }
  .happy img {
    width: 70% !important;
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
      <section className="managing">
        <div className="mirror">
          <Image src={Side} alt="" objectFit={"contain"} />
        </div>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <h1 className="mb-3 mb-md-5" data-aos="fade-down">
              Manage your business efficiently
                            </h1>
              <p className="mb-5" data-aos="fade-down">
              Get paid faster – Automate Reminders when you sell on credit. Send reminders via SMS and WhatsApp. No more credit sales records in a notebook. All this so that you can make better business decisions.
              </p>
              <div className="features">
                <div
                  className="d-flex"
                  data-aos="fade-right"
                  data-aos-duration="100"
                >
                  <span className="me-3 mb-2 ">
                    <IoMdCheckmark size={20} color={"#01b5ec"} />
                  </span>
                  Capture your profits and spend wisely with Luca
                                  </div>
                <div
                  className="d-flex"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <span className="me-3 mb-2">
                    {" "}
                    <IoMdCheckmark size={20} color={"#01b5ec"} />
                  </span>
                  Send digital receipt and invoice via WhatsApp.
                                  </div>
                <div
                  className="d-flex"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <span className="me-3 mb-2">
                    {" "}
                    <IoMdCheckmark size={20} color={"#01b5ec"} />
                  </span>{" "}
                  Keep your books in one place, create invoices, track expenses and more. Anyone can use it!
                </div>
              </div>
            </div>
            <div
              className="
              col-md-6
              p-4
              d-flex
              justify-content-center
              align-items-center
            "
            >
              <div
                className="happy"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <Image src={PhoneImage} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Style>
  );
}
