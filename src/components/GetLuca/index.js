import React from "react";
import Image from "next/image";
import HeaderImage from "../../Assets/Images/headerImage.png";

import styled from "styled-components";

const Style = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  .info {
    background: #edfbff;
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
`;

export default function index() {
  return (
    <Style>
      <div className="info d-flex align-items-center justify-content-between pt-2 px-3 d-block d-md-none">
        <div className="d-flex align-items-center">
          <div className="headerImage text-center">
            <Image src={HeaderImage} alt="Luca Africa HeaderImage" />
          </div>
          <h4>LUCA</h4>
        </div>
        <div>
          <button className="btn-md">Get Luca</button>
        </div>
      </div>
    </Style>
  );
}
