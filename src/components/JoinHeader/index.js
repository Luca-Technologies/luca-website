import React from "react";
import styled from "styled-components";
// import HeaderImage from "../../Assets/Images/header3.png";

const Style = styled.div`
  .header3 h1 {
    font-size: 70px !important;
    color: #ffffff !important;
  }
  .header3 p {
    color: #ffffff !important;
    text-align: left !important;
  }
  .size {
    width: 75%;
  }

  @media (max-width: 1200px) {
    .header3 h1 {
      font-size: 62px !important;
      color: #ffffff !important;
    }
  }

  @media (max-width: 768px) {
    .header3 h1 {
      font-size: 46px !important;
      color: #ffffff !important;
    }

    .header3 h1,
    .header3 p {
      text-align: left !important;
    }
    .size {
      width: 100%;
    }
  }
`;

export default function index() {
  return (
    <Style>
      <section className="header3 d-flex justify-content-center align-items-end">
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="mb-6 px-5 size">
              <h1>Let’s work together</h1>
              <p className="ms-3">
              Together, we build financial management tools to digitize the operations of millions of micro and small businesses in Africa. Work with the most talented, passionate, and highly-motivated teammate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Style>
  );
}
