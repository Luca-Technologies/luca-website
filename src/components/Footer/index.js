import React from "react";
import Image from "next/image";
import Link from "next/link";
//import GooglePlay from "../../Assets/Images/Elements/Buttons/Market/Google Play.png";
import Logo from "../../Assets/Images/logo-white.svg";
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
  footer strong {
    color: white !important;
  }
  footer h5 {
    color: #ffffff;
    margin-bottom: 10px;
  }
  .address {
    padding-top: 0;
    line-height: 2;
  }
  footer a,
  .address {
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
    list-style: none;
  }
  span a {
    color: #fff !important;
    opacity: 1 !important;
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
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="mb-3">
                <Image src={Logo} alt="Luca Africa Logo" />
              </div>
              <p className="pe-12 pe-xl-5">
                Luca is a bookkeeping app, design to help small business keep
                track of their financial and business activities.
              </p>
              <div className="flex">
                <span className="me-4">
                  <a
                    href="https://twitter.com/LucaAfrica"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineTwitter color={"#fff"} size={25} />
                  </a>
                </span>
                <span className="me-4">
                  <a
                    href="https://www.instagram.com/lucaafricahq/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagramSquare color={"#fff"} size={25} />
                  </a>
                </span>
                <span className="me-4">
                  <a
                    href="https://www.facebook.com/Luca-106449338582738"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillFacebook color={"#fff"} size={25} />
                  </a>
                </span>
                <span className="me-4">
                  <a
                    href="https://www.linkedin.com/company/77669683/admin/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillLinkedin color={"#fff"} size={25} />
                  </a>
                </span>
              </div>
            </div>
            <ProductSection />
            <CompanySection />
            <ReachUs />
          </div>
          <hr />
          <div className="text-center mt-5">
            <p className="mb-0 pb-3">
              © {new Date().getFullYear()} Luca Technologies Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </Style>
  );
}

const ProductSection = () => (
  <div className="col-lg-2 mx-auto mb-4 mb-lg-0">
    <h5 className="">Product</h5>
    <ul>
      <li>
        <Link href="/#Bookkeeping">
          <a>Bookkeeping</a>
        </Link>
      </li>
      <li>
        <Link href="/#debt-tracking">
          <a>Debt Tracking</a>
        </Link>
      </li>
      <li>
        <Link href="/#inventory-management">
          <a>Inventory Management</a>
        </Link>
      </li>
      <li>
        <Link href="/first-step">
          <a>Luca FirstStep</a>
        </Link>
      </li>
      <li>
        <Link href="/ambassadors">
          <a>Join Luca Ambassador</a>
        </Link>
      </li>
      <li>
        <Link href="/ambassador-manual">
          <a>About Luca Ambassador</a>
        </Link>
      </li>
    </ul>
  </div>
);

const CompanySection = () => (
  <div className="col-lg-2 mx-auto mb-4 mb-lg-0">
    <h5 className="">Company</h5>
    <ul>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/termsofservice">
          <a>Terms of Service</a>
        </Link>
      </li>
      <li>
        <Link href="/ambassador_terms">
          <a>Luca Ambassador Terms & Conditions</a>
        </Link>
      </li>
      <li>
        <Link href="/privacypolicy">
          <a href="">Privacy Policy</a>
        </Link>
      </li>
    </ul>
  </div>
);

const ReachUs = () => (
  <div className="col-lg-3 mx-auto">
    <h5>Reach Us</h5>
    <ul>
      <li>
        <span className="address">Office Address:</span>
        <br />
        <br />
        <address>
          <strong className="text-[13px]">Nigeria</strong>
          <br />
          <div className="address">
            23 Adekunle Fajuyi Way, <br />
            Ikeja GRA, Lagos
            <br />
            0700 0880 880
          </div>
        </address>
        <address>
          <strong className="text-[13px]">USA</strong>
          <div className="address">
            21818 Craggview St, <br />
            Suite 201 Chatsworth, <br />
            CA 91311
          </div>
        </address>

        <address>
          <div className="address">hello@luca.africa</div>
        </address>
      </li>
    </ul>
  </div>
);
