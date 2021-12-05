import React from "react";
import styled from "styled-components";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { BsDot } from "react-icons/bs";

const Style = styled.div`
  @media (max-width: 576px) {
    .apply button {
      font-size: 12px;
    }
    .overview p {
      text-align: left !important;
      margin-bottom: 0 !important;
    }
  }
  /*  */
  .action,
  .action a {
    color: #fff !important;
    opacity: 1;
  }

  .overview p {
    color: #333e49;
  }
  .overview .applyforjob button {
    width: 100%;
  }
  .dot {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #000;
  }
`;

export default function index() {
  return (
    <Style>
      <section className="overview">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h5 className="font-weight-bold">Description</h5>
            <div>
              <div>
                <span className="me-2 me-md-4">
                  <AiOutlineTwitter color={"#01B5EC"} size={25} />
                </span>
                <span className="me-2 me-md-4">
                  <FaInstagramSquare color={"#01B5EC"} size={25} />
                </span>
                <span className="me-2 me-md-4">
                  <AiFillFacebook color={"#01B5EC"} size={25} />
                </span>
                <span className="me-2 me-4">
                  <AiFillLinkedin color={"#01B5EC"} size={25} />
                </span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborumLorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit
            </p>
          </div>

          <div className="mb-5">
            <h5 className="font-weight-bold mb-5">Objectives of this Role</h5>
            <div>
              <div className="d-flex align-items-center">
                <div className="dot me-2 mb-3"></div>{" "}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="d-flex align-items-center">
                <div className="dot me-2 mb-3"></div>{" "}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="d-flex align-items-center">
                <div className="dot me-2 mb-3"></div>{" "}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="d-flex align-items-center">
                <div className="dot me-2 mb-3"></div>{" "}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="d-flex align-items-center">
                <div className="dot me-2 mb-3"></div>{" "}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="d-flex align-items-center">
                <div className="dot me-2 mb-3"></div>{" "}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="d-flex align-items-center">
                <div className="dot me-2 mb-3"></div>{" "}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <h5 className="font-weight-bold mb-5">Requirements</h5>
            <div>
              <div className="d-flex align-items-center">
                <div className="dot me-2 mb-3"></div>{" "}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="d-flex align-items-center">
                <div className="dot me-2 mb-3"></div>{" "}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="d-flex align-items-center">
                <div className="dot me-2 mb-3"></div>{" "}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="d-flex align-items-center">
                <div className="dot me-2 mb-3"></div>{" "}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="d-flex align-items-center">
                <div className="dot me-2 mb-3"></div>{" "}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="d-flex align-items-center">
                <div className="dot me-2 mb-3"></div>{" "}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="d-flex align-items-center">
                <div className="dot me-2 mb-3"></div>{" "}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div className="applyforjob">
            <button className="btn btn-primary btn-md">
              Apply for this Job
            </button>
          </div>
        </div>
      </section>
    </Style>
  );
}
