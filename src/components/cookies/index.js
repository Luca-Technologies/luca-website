import React from "react";
import Image from "next/image";
import CookiesImage from "../../Assets/Images/cookies.svg";
import styled from "styled-components";

import Link from "next/link";

const Style = styled.div`
  .cookies {
    /* width: 80%; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid; */
    position: fixed;
    bottom: 25px;
    z-index: 30000;
    /* background: #fff; */
  }
  .cookies p {
    font-size: 13px;
  }
  .cookies .modal_icon {
    flex: 3;
  }
  .cookies .modal_body {
    flex: 50;
  }

  .cookies button {
    font-size: 13px;
    border-radius: 20px;
    outline: none;
    box-shadow: none;
    border: none;
  }
  .cookies .iconWrapper {
    position: absolute;
    left: -40px;
    top: 10%;
  }
  .cookies a,
  .cookies span {
    color: #01b5ec;
  }
  .cookies a {
    font-size: 15px;
    text-decoration: underline !important;
  }
  .modal_container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 100px;
    border: none;
    background: #fff;
    box-shadow: 5.66245px 6.60619px 22.6498px rgba(0, 0, 0, 0.07);
    border-radius: 11.3249px;
  }
  @media only screen and (max-width: 768px) {
    .modal_container {
      margin: 0 50px;
    }
  }
  @media only screen and (max-width: 360px) {
    .modal_container {
      margin: 0 5px;
    }
    .cookies button {
      font-size: 12px;
      border-radius: 20px;
    }
  }
`;

export default function index({ handleCookies, cookies }) {
  return (
    <Style>
      <div className="cookies ">
        <div className="modal_container ">
          <div className="modal_main d-flex flex-column flex-md-row align-items-center py-4 px-3 position-relative">
            <div className="modal_icon mr-3">
              <div className="iconWrapper d-none d-md-block">
                <Image src={CookiesImage} alt="" width="70px" />
              </div>
            </div>
            <div className="modal_body">
              <div className="modal_title"></div>
              <p className="modal_description">
                We use cookies for security, navigation analysis, better
                experience and personalization of content in accordance with our
                cookies Policy and your preferences indicated in the &#39;Cookie
                Settings&#39;
                <Link href="/cookies">
                  <a className="text-center  mx-2 mx-md-0">
                    {" "}
                    <span>Cookies Policy</span>
                  </a>
                </Link>
              </p>
            </div>
            <div className="ml-3">
              <div className="d-flex flex-row flex-md-column align-items-center text-center">
                <button
                  className="btn-primary mx-2  p-2 mb-1"
                  onClick={() => handleCookies(!cookies)}
                >
                  Accept All Cookies
                </button>
                <Link href="/">
                  <a className="text-center  mx-2 mx-md-0">cookies settings</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="modal_footer"></div>
        </div>
      </div>
    </Style>
  );
}
