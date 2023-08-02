import React from "react";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import styled from "styled-components";

import TitleSection from "../TitleSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Style = styled.div`
  .slick-slide + div {
    margin: 0 1rem;
    /* height: 100%; */
  }
  .slick-track {
    display: flex !important;
    align-items: baseline;
  }

  .slick-slide {
    height: auto;
    display: flex;
  }
  //
  h2 {
    color: #01b5ec !important;
  }
  .card {
    border-radius: 25px;
    border: none;
    padding: 5px;
    /*
 border: none;
    box-shadow: 0 0 25px rgb(0 0 0 / 6%); */
  }
  .card-body {
    padding: 0;
  }
  .testi {
    letter-spacing: 2px;
    font-size: 14px;
  }
  .border {
    border: none !important;
  }
  .list p {
    font-size: 14px !important;
    line-height: 1.5;
    color: var(--secondary-color);
    text-align: left;
  }
  .imageWrapper {
    width: 60px;
    height: 60px;
    flex: 1;
  }
  .review {
    flex: 4;
  }
  .imageWrapper img {
    width: 100%;
  }
  .name {
    margin-top: 12px;
    color: #000000;
    text-transform: capitalize !important;

    mix-blend-mode: normal;
    opacity: 0.5;
  }
`;

export default function index({ data }) {
  var settings = {
    dots: false,

    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    className: "center",
    // centerMode: true,
    infinite: true,
    centerPadding: "60px",
    // speed: 100,
    adaptiveHeight: true,

    cssEase: "linear",
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };
  return (
    <Style>
      <section className="Testimonials">
        <div className="container-fluid">
          <div className="text-center">
            <div className="flex justify-center">
              <TitleSection title="What users say" />
            </div>

            <div className="list">
              <div className="row justify-content-center h-100">
                <Slider
                  {...settings}
                  // responsive={responsive}
                  // autoPlay={true}
                  // autoPlaySpeed={4000}
                  // infinite={true}
                  // removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                >
                  {data.map((item, index) => (
                    <div key={index} className="card d-flex h-100 mx-0">
                      <div className="card-body d-flex align-items-center">
                        <div>
                          <div className="border d-flex ">
                            <div className="imageWrapper mr-2 pt-2">
                              <Image src={item.picture} alt="Luca Africa TestimonyPicture" />
                            </div>
                            <div className="review">
                              <p className="m-0 ">{item.review}</p>
                              <p className="mb-0 capitalize name">
                                {item.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
                {/*  */}

                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Style>
  );
}
