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
    list-style: none;
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
                <Image src={Logo} alt="" />
              </div>
              <p className="pe-12 pe-xl-5">
                Luca is a bookkeeping app, design to help small business keep
                track of their financial and business activities.
              </p>
              <div>
                <span className="me-4">
                  <AiOutlineTwitter color={"#fff"} size={25} />
                </span>
                <span className="me-4">
                  <FaInstagramSquare color={"#fff"} size={25} />
                </span>
                <span className="me-4">
                  <AiFillFacebook color={"#fff"} size={25} />
                </span>
                <span className="me-4">
                  <AiFillLinkedin color={"#fff"} size={25} />
                </span>
              </div>
            </div>
            <div className="col-lg-2 mx-auto mb-4 mb-lg-0">
              <h5 className="">Company</h5>
              <ul>
                <li>
                  <Link href="/#features">
                    <a>Features</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/faqs">
                    <a>FAQ</a>
                  </Link>
                </li>
                <li>
                  <Link href="/joinourteam">
                    <a>Join Our Team</a>
                  </Link>
                </li>
                <li>
                  <Link href="/termsofservice">
                    <a>Terms of Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/privacypolicy">
                    <a href="">Privacy Policy</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 mx-auto mb-4 mb-lg-0">
              <h5>Contact</h5>
              <ul>
                <li>
                  <a href="">Phone: 070 00 880 880</a>
                </li>
                {/* <li>
                  <Link href="/faqs">
                    <a>FAQ</a>
                  </Link>
                </li> */}
                <li>
                  <a href="">Enquiries: hello@luca.africa</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 mx-auto">
              <h5>Office</h5>
              <ul>
                <li>
                  <a href="">
                    Address:
                    <br />
                    Nigeria
                    <br />
                    23 Adekunle Fajuyi Way, Ikeja GRA, Lagos
                    <br />
                    USA
                    <br />
                    21818 Craggview St, Suite 201
                    <br />
                    Chatsworth, CA 91311
                  </a>
                </li>
              </ul>
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
