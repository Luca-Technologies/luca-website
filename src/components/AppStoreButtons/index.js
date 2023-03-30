import styled from "styled-components";
import React from "react";
import Image from "next/image";
import GooglePlayNew from "../../Assets/Images/button1.svg";
import AppStoreNew from "../../Assets/Images/button2.svg";

const Style = styled.div``;

export default function index() {
  return (
    <Style>
      <div
        className="d-flex justify-content-center justify-content-md-start align-items-center store-buttons"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <a
          target="_blank"
          href="https://play.google.com/store/apps/details?id=com.falcon.luca"
          className="mr-3"
        >
          <Image src={GooglePlayNew} alt="" className="img-fluid" />
        </a>
        <a
          target="_blank"
          href="https://apps.apple.com/ng/app/luca-easy-bookkeeping-app/id1607814067"
        >
          <Image src={AppStoreNew} alt="" className="img-fluid" />
        </a>
      </div>
    </Style>
  );
}
