import React from "react";
import styled from "styled-components";

const Style = styled.div`
  .terms {
    padding-top: 15rem;
  }
  .terms p {
    color: #959595;
    line-height: 30px;
    font-size: 500;
  }
  .terms .date {
    letter-spacing: 3px;
    font-size: 11px !important;
  }
  .bold {
    font-weight: bold;
  }
  h5 {
    color: #01b5ec !important;
    font-weight: 800;
    font-size: 25px;
  }
  div {
    margin-bottom: 30px;
  }
  @media (max-width: 768px) {
    p {
      text-align: left;
    }
  }
`;

export default function index({ dateText, titleText, termsText }) {
  return (
    <Style>
      <section className="terms">
        <div className="container">
          <p className="mb-4 date text-uppercase">{dateText}</p>
          <h1 className="mb-5">{titleText}</h1>
          <p>{termsText}</p>
        </div>
      </section>
    </Style>
  );
}
