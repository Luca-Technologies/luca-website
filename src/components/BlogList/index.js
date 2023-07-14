/* eslint-disable @next/next/link-passhref */
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const Style = styled.div`
  /* padding: 5rem 0; */
  padding: ${(props) => (props.blogListTitle ? " 0" : "5rem 0")};
  section {
    padding: ${(props) => (props.blogListTitle ? " 3rem 0 5rem 0" : "3rem 0")};
  }
  p {
    color: #171b42 !important;
  }
  h4 {
    color: #171b42 !important;
  }
  .date {
    font-size: 14px;
  }
  .blogs p {
    font-size: 14px;
    font-weight: 500;
  }
  .blogs img {
    object-fit: cover;
  }
  .blogs .imageWrapper img {
    height: 100%;
    max-height: 230px !important;
    overflow: hidden;
    /* border: 10px solid red; */
  }
  .imageWrapper div {
    width: 100% !important;
  }

  .blogs .imageWrapperMain img {
    min-height: 350px !important;
    height: 100%;
    max-height: 350px !important;
  }
  .blogs .adsWrapper {
    width: 100%;
    /* padding: 1rem; */
    border: none;
    background: #f1e9e9;
    border-radius: 10px;
  }
  .blog-main,
  .cursor {
    cursor: pointer;
  }
  .blog-main p {
    font-size: 16px;
  }
  .adsWrapper {
    /* padding: 0 8rem; */
  }
  .blognull {
    height: 50vh;
  }
  .blognull h1 {
    color: #181b42 !important;
  }
`;

export default function index({
  blogMain = [],
  blogList = [],
  blogList2 = [],
  blogListTitle,
}) {
  return (
    <Style blogListTitle>
      <section className="blogs ">
        <div className="container-fluid px-md-5 mb-6">
          <div className="">
            {blogList.length <= 0 && (
              <div className="blognull d-flex align-items-center">
                <h1>
                  We will open the full page when we have the blog content.
                  Thank you
                </h1>
              </div>
            )}
            {blogMain[0] && blogList[0] && (
              <div className="row">
                <div className="col-md-5">
                  {blogMain ? (
                    <Link href="/ourblog">
                      <a>
                        <div className="blog-main">
                          <div className="imageWrapperMain mb-3">
                            {blogMain[0] && (
                              <Image src={blogMain[0]?.picture} alt="Luca Africa BlogMain" />
                            )}
                          </div>
                          <div className="">
                            <p className="mb-2 date">{blogMain[0]?.date}</p>
                            <h4>{blogMain[0]?.title}</h4>
                            <p>{blogMain[0]?.desc}</p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  ) : (
                    ""
                  )}
                </div>

                {blogList ? (
                  <div className="col-md-7">
                    <div className="row">
                      {blogList.map((item, index) => (
                        <div key={index} className="col-md-6 cursor">
                          <Link href="/ourblog">
                            <a>
                              {item.picture && (
                                <div className="imageWrapper mb-3">
                                  <Image src={item?.picture} alt="Luca Africa BlogImage" />
                                </div>
                              )}

                              <div>
                                <p className="mb-2 date">{item?.date}</p>
                                <h4>{item?.title}</h4>
                                <p>{item?.desc}</p>
                              </div>
                            </a>
                          </Link>
                        </div>
                      ))}

                      <div className="col-md-12 mt-4">
                        <div className="adsWrapper p-5 text-center">
                          <div>
                            <h4 className="text-uppercase">features Ads</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        </div>

        {blogList2 ? (
          <div className="container">
            {blogListTitle && (
              <h2 className="mb-5 text-center fw-bold text-uppercase">
                {blogListTitle}
              </h2>
            )}
            <div className="row">
              {blogList2.map((item, index) => (
                <div key={index} className="col-md-4 cursor">
                  <Link href="/ourblog">
                    <a>
                      <div className="imageWrapper mb-3">
                        {item?.picture && <Image src={item?.picture} alt="Luca Africa BlogImage" />}
                      </div>
                      <div>
                        <p className="mb-2 date">{item?.date}</p>
                        <h4>{item?.title}</h4>
                        <p>{item?.desc}</p>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </section>
    </Style>
  );
}
