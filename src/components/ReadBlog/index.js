import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";

//
import ReadImage from "../../Assets/Images/blog1.png";

const Style = styled.div`
  section {
    overflow: inherit !important;
  }
  .reading {
    padding-top: 13rem;
  }
  .reading .subscribe {
    background: #d8f6ff;
  }
  .reading .grow {
    background: #000000;
  }
  .reading .grow,
  .grow p {
    color: #ffffff !important;
  }
  .date {
    color: #171b42 !important;
  }
  .reading p {
    font-size: 15px !important;
    font-weight: 600;
    text-align: left;
    line-height: 30px;
  }
  .description {
    color: #171b42 !important;
    text-align: left;
  }
  .reading .imageWrapperMain img {
    height: 100%;
    width: 100%;
    max-height: 500px;
    border-radius: 10px;
    object-fit: cover;
  }
  .reading h3 {
    color: #171b42 !important;
  }
  .imageWrapperMain div {
    width: 100%;
  }
  .subscribe p {
    color: #171b42 !important;
  }
  svg {
    font-size: 20px;
  }
  .subscribe_here {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* padding: 3rem; */
    height: 300px;
    background: #e8faff;
  }
  .subscribe_here p {
    text-align: center;
  }
  .input-box {
    display: flex;
    /* padding: 0 5rem; */
    justify-content: center;
    align-items: center;
  }
  .input-box div {
    margin: 0 5rem;
  }
  input {
    padding: 20px 110px 20px 10px;
    width: 100%;
    border: 2px solid #90e5ff;
  }
  button {
    position: absolute;
    height: 84%;
    right: 7px;
    padding: 0 13px;
    background: #171b42;
    color: #ffff;
    border: none;
  }
  .subscribe_here h2 {
    font-weight: 900;
  }
  .subscribe_here p {
    font-size: 16px;
    color: #171b42;
  }
  .blogWrapper {
    /* height: 1100px;
    overflow-y: scroll; */
    position: sticky;
    top: 0;
    /* height: 100%; */
  }
  @media (max-width: 992px) {
    .blogWrapper {
      height: 100%;
      /* overflow-y: unset; */
    }
  }

  @media (max-width: 768px) {
    .input-box div {
      margin: 0 0rem;
    }
  }
`;

export default function index() {
  return (
    <Style>
      <section className="reading firstBackground">
        <div className="container">
          <div className="row ">
            <div className="col-lg-4 pe-lg-5 mb-5 ">
              <div className="position-sticky" style={{ top: "100px" }}>
                <div className="mb-5">
                  <p className="mb-3 date">21ST SEPTEMBER 2021</p>
                  <h3 className="mb-4">
                    How luca is supporting small businesses
                  </h3>
                  <div>
                    <span className="me-4">
                      <AiOutlineTwitter color={"#01B5EC"} size={25} />
                    </span>
                    <span className="me-4">
                      <FaInstagramSquare color={"#01B5EC"} size={25} />
                    </span>
                    <span className="me-4">
                      <AiFillFacebook color={"#01B5EC"} size={25} />
                    </span>
                    <span className="me-4">
                      <AiFillLinkedin color={"#01B5EC"} size={25} />
                    </span>
                  </div>
                </div>
                <div className="d-none d-lg-block mb-6">
                  <div className="subscribe py-4 px-3 mb-4">
                    <h5 className="mb-2">Subscribe</h5>
                    <p className="mb-0">
                      TO BLOG UPDATES{" "}
                      <span className="ms-1">
                        <BsArrowRight />
                      </span>
                    </p>
                  </div>
                  <div className="grow py-4 px-3">
                    <h5 className="mb-3">Grow your business</h5>
                    <p className="mb-0">
                      HELPFUL TIPS BUSINESS GUIDE{" "}
                      <span className="ms-1">
                        <BsArrowRight />
                      </span>
                    </p>
                  </div>
                </div>
                {/* add here */}
                <div className="mb-1 d-none d-lg-block">
                  <p className="mb-3 date">21ST SEPTEMBER 2021</p>
                  <h3 className="mb-4">
                    How luca is supporting small businesses
                  </h3>
                  <div className="mb-4">
                    <span className="me-4">
                      <AiOutlineTwitter color={"#01B5EC"} size={25} />
                    </span>
                    <span className="me-4">
                      <FaInstagramSquare color={"#01B5EC"} size={25} />
                    </span>
                    <span className="me-4">
                      <AiFillFacebook color={"#01B5EC"} size={25} />
                    </span>
                    <span className="me-4">
                      <AiFillLinkedin color={"#01B5EC"} size={25} />
                    </span>
                  </div>
                </div>
                <div className="d-none d-lg-block">
                  <div className="subscribe p-3 mb-4">
                    <h5 className="mb-2">Subscribe</h5>
                    <p>
                      TO BLOG UPDATES{" "}
                      <span className="ms-1">
                        <BsArrowRight />
                      </span>
                    </p>
                  </div>
                  <div className="grow p-3">
                    <h5 className="mb-3">Grow your business</h5>
                    <p className="mb-0">
                      HELPFUL TIPS BUSINESS GUIDE{" "}
                      <span className="ms-1">
                        <BsArrowRight />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mb-5 ">
              <div className="imageWrapperMain mb-5">
                <Image src={ReadImage} alt="" />
              </div>

              <div>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborumLorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborumLorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborumLorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborumLorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborumLorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborumLorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </p>
              </div>
            </div>
            <div className="col-lg-4 pe-lg-5 mb-5 d-block d-lg-none">
              <div>
                <div className="subscribe p-3 mb-4">
                  <h5 className="mb-2">Subscribe</h5>
                  <p>
                    TO BLOG UPDATES{" "}
                    <span className="ms-1">
                      <BsArrowRight />
                    </span>
                  </p>
                </div>
                <div className="grow p-3">
                  <h5 className="mb-3">Grow your business</h5>
                  <p>
                    HELPFUL TIPS BUSINESS GUIDE{" "}
                    <span className="ms-1">
                      <BsArrowRight />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  */}

          <div className="subscribe_here container">
            <div className="mb-3 container">
              <h2 className="mb-3 px-lg-5">
                Want To Learn How luca helps small business?
              </h2>
              <p className="mb-3">Subscribe to Luca</p>
              <div className="input-box">
                <div className="position-relative w-100 d-flex align-items-center">
                  <input placeholder="Enter your email address" />
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Style>
  );
}
