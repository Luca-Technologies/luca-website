import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
const Style = styled.div`
  h2 {
    color: #01b5ec !important;
  }
  .card {
    border: 3px solid #effbff;
    border-radius: 25px;
    padding: 5px;
  }
  .card-body {
    padding: 10px 5px;
  }
  .border {
    border: none !important;
  }
  p {
    font-size: 10px !important;
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
  /* .imageWrapper img {
    width: 100%;
  } */
  .name {
    letter-spacing: 1px;
    color: #000000;

    mix-blend-mode: normal;
    opacity: 0.5;
  }
  /* .react-multi-carousel-item {
    width: 360px !important;
    margin: 0 1rem;
  } */
  section {
    overflow: hidden;
  }

  .name {
    letter-spacing: 2px;
  }
  .card {
    border: 2px solid #effbff;
    border-radius: 12px;
  }
  .section {
    transform: translateZ(0);

    /* max-width: 300vw; */
    width: 300px;
    animation: nonStop 120s linear 0s infinite normal none running;
    -webkit-animation: nonStop 30s linear 0s infinite normal none running;
    display: flex;
    margin-top: 55 px;
  }

  @keyframes nonStop {
    /* 100% {
    transform: translate3d(-100%, 0, 0);
  } */
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(-300%);
    }
  }

  /* #pot {
    bottom: 15%;
    position: absolute;
    -webkit-animation: linear infinite alternate;
    -webkit-animation-name: run;
    -webkit-animation-duration: 5s;
  }
  @-webkit-keyframes run {
    0% {
      left: 0;
    }
    50% {
      left: 100%;
    }
    100% {
      left: 0;
    }
  } */
  /* @keyframes nonStop {
  0% {
    top: 0px;
  }
  25% {
    top: 200px;
  }
  50% {
    top: 100px;
  }
  75% {
    top: 200px;
  }
  100% {
    top: 0px;
  }
} */
`;

export default function index({ data }) {
  // var settings = {
  //   dots: false,

  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   initialSlide: 1,
  //   class: "center",
  //   // centerMode: true,
  //   infinite: true,
  //   // centerPadding: "60px",
  //   // speed: 100,
  //   adaptiveHeight: true,

  //   cssEase: "linear",
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 3000,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 980,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 580,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <Style>
      <section className="Testimonials">
        <div className="container-fluid">
          <div className="text-center">
            <p className="mb-4 text-uppercase text-center">Testimonials</p>
            <h2 className="mb-5 px-1">What our customers are saying</h2>

            <div className="list">
              <div className="section">
                <div className="d-flex">
                  {data.map((item, index) => (
                    <div
                      key={index}
                      className="card"
                      style={{ minWidth: "300px", marginLeft: "20px" }}
                    >
                      <div className="card-body d-flex align-items-center">
                        <div className="d-flex">
                          <div className="mr-2 imageWrapper">
                            <Image src={item.picture} alt="" />
                          </div>
                          <div className="review">
                            <p className="">{item.review}</p>
                            <p className="name text-uppercase m-0">
                              {item.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Style>
  );
}
