import React from "react";
import styled from "styled-components";

const Style = styled.div`
  padding-top: 12rem;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(
    182.49deg,
    #e3f7ff 2.09%,
    rgba(255, 255, 255, 0) 142.65%
  );
`;

export default function index() {
  return (
    <Style>
      <section>
        <div className="container">
          <div>
            <h1 className="mb-5">FAQs</h1>
            <h1>Frequently Asked Questions</h1>
          </div>
        </div>
      </section>
    </Style>
  );
}
