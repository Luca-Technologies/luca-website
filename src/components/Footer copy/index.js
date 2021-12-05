import React from "react";
import Image from "next/image";
import Link from "next/link";
//import GooglePlay from "../../Assets/Images/Elements/Buttons/Market/Google Play.png";
import Logo from "../../Assets/Images/Logo.png";
// import PhoneImage from "../../Assets/Images/phone1.png";
import styled from "styled-components";
// import { IolgCheckmark } from "react-icons/io";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";

const Style = styled.div`
  footer {
    background: #181b42;
    position: relative;
    padding-top: 4rem;
    padding-bottom: 0;
    z-index: 10;
  }

  footer img {
    width: 120px;
  }
  footer p {
    color: #ffffff;
    font-size: 14px;
    mix-blend-mode: normal;
    opacity: 0.5;
    line-height: 25px;
  }
  footer h5 {
    color: #ffffff;
    margin-bottom: 10px;
  }
  footer a {
    font-size: 13px;
    color: #ffffff;
    opacity: 0.5;
    font-weight: 400;
  }
  footer li {
    margin-bottom: 1rem;
  }
  footer hr {
    opacity: 0.2;
    border-top: 1px solid #ffffff !important;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  .action {
    padding-top: 1rem;
    padding-bottom: 3rem;
  }
  @media (max-width: 768px) {
    footer {
      padding-bottom: 8rem;
    }
  }
`;

export default function index() {
  return (
    <Style>
      <footer>
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="text-center action">
              <a href="">Back to website </a>.<a href="">View all jobs </a>
            </div>
          </div>

          <hr />
          <div className="text-center mt-5">
            <p className="mb-0 pb-3">© 2021 Luca. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </Style>
  );
}
