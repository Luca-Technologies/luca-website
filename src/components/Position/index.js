import React from "react";
import styled from "styled-components";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

const Styled = styled.div`
  .open-position .Wrapper {
    width: 60%;
  }
  .open-position .Wrapper p {
    font-size: 14px;
    color: #959595;
  }
  .open-position h5 {
    font-weight: 600;
  }
  .vacancy {
    padding: 7rem 0;
  }

  h1 {
    color: #181b42 !important;
  }
  @media (max-width: 768px) {
    .open-position .Wrapper {
      width: 90%;
    }
  }
`;

export default function index({ vacancy }) {
  return (
    <Styled>
      <section className="open-position">
        <div className="d-flex justify-content-center">
          {vacancy.length <= 0 && (
            <div className="vacancy">
              <h1>No Vacancy</h1>
            </div>
          )}

          {vacancy.length >= 1 && (
            <div className="Wrapper">
              <h1 className="text-capitalize mb-5">open position</h1>
              {vacancy.map((item, index) => (
                <div key={index}>
                  <hr />
                  <div className="mt-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5>{item?.position}</h5>
                        <p>{item?.type}</p>
                      </div>
                      <div className="d-flex mb-3">
                        <Link href="/career">
                          <a className="d-flex ">
                            <p className="me-3 mb-0">{item?.date}</p>

                            <span>
                              <MdOutlineKeyboardArrowRight
                                size={25}
                                color={"#959595"}
                              />
                            </span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {index !== 0 && <hr />}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Styled>
  );
}
