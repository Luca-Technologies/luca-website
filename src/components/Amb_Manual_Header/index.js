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
            <h1 className="mb-5">Luca Last Mile Ambassador (LMA) Training Manual</h1>
            <p>The Luca LMA Training Manual is the ultimate guide that explains everything you need to know about being a Luca Ambassador. It describes the Luca – easy-to-use bookkeeping app, how you earn as an ambassador, ways to sell and other benefits.
            </p>
          </div>
        </div>
      </section>
    </Style>
  );
}
