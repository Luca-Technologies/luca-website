import React from "react";
import styled from "styled-components";
// import Image from "next/image";
// import BlogHeaderImage from "../../Assets/Images/AboutImage.png";

const Style = styled.div`
  padding-top: 5rem;
  .blogheader {
    background-repeat: no-repeat;
    background-size: cover;
    height: 90vh;
    position: relative;
    z-index: 1;
  }
  .Blog h1 {
    color: #ffffff !important;
  }
  .blogheader::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(23, 27, 66, 0.7);
    z-index: -1;
  }
  .blogheader .container {
    height: 70vh;
  }
  .Blog {
    margin: 0 13rem;
  }
  .Blog p {
    color: #ffffff;
    letter-spacing: 3px;
  }
  @media (max-width: 768px) {
    .Blog {
      margin: 0 4rem;
    }
  }
  @media (max-width: 576px) {
    .blogheader .container {
      height: 100vh;
    }
    .Blog {
      margin: 0;
    }
  }
`;

export default function index() {
  return (
    <Style>
      <section className="blogheader">
        <div
          className="
          container
          d-flex
          justify-content-center
          align-items-center
          text-center
        "
        >
          <div className="Blog">
            <p className="mb-4 text-uppercase">Blog</p>
            <h1>
            Building something great for micro and small businesses in Africa
              
              </h1>
          </div>
        </div>
      </section>
    </Style>
  );
}
