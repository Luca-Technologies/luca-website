import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Logo from "../../Assets/Images/Logo.svg";
import Link from "next/link";

const Style = styled.div`
  /*  */
  .apply .imageWrapper img {
    width: 100% !important;
  }

  .apply p {
    color: #c3c7c9;
  }
  .apply .border {
    background: #ffffff;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.07);
  }
  .apply button {
    border: none;
    background: transparent;
    font-weight: 700;
    color: #c3c7c9;
  }
  .active {
    color: #01b5ec !important;
    border-bottom: 1px solid !important;
  }
  @media (max-width: 768px) {
    .apply button {
      font-size: 15px;
    }
  }
  @media (max-width: 576px) {
    .apply button {
      font-size: 12px;
    }
    .overview p {
      text-align: left !important;
    }
  }
  /*  */
`;

export default function index({ setToggle, toggle }) {
  return (
    <Style>
      <section className="apply">
        <div className="container text-center">
          <div className="d-flex justify-content-center align-items-center mb-3">
            <div className="imageWrapper">
              <Link href="/">
                <a className="nav-link">
                  <Image src={Logo} alt="Luca Africa Logo" className="img-fluid" />
                </a>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-center">Digital Marketer</h4>
            <p>Nigeria . Remote</p>
          </div>
        </div>
        <div className="pt-4 pb-1 border">
          <div className="d-flex justify-content-center">
            <button
              className={`mx-2 ${toggle ? "active" : ""}`}
              onClick={() => setToggle(!toggle)}
            >
              OVERVIEW
            </button>
            <button
              className={`mx-2 ${toggle ? "" : "active"}`}
              onClick={() => setToggle(!toggle)}
            >
              APPLICATION
            </button>
          </div>
        </div>
      </section>
    </Style>
  );
}
