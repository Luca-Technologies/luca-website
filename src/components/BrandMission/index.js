import React from "react";
import styled from "styled-components";
import Image from "next/image";
import About1 from "../../Assets/Images/about1.png";
import About2 from "../../Assets/Images/about2.png";
import About3 from "../../Assets/Images/about3.png";
import About4 from "../../Assets/Images/about4.png";
import About5 from "../../Assets/Images/about5.png";
import About6 from "../../Assets/Images/about6.png";
import About7 from "../../Assets/Images/about7.png";
import About8 from "../../Assets/Images/about8.png";
import About9 from "../../Assets/Images/about9.png";
import About10 from "../../Assets/Images/about10.png";
import About11 from "../../Assets/Images/about11.png";
import About12 from "../../Assets/Images/about12.png";

const Style = styled.div`
  section {
    padding-bottom: 0 !important;
  }
  .brand {
    /* margin: 0 10px; */
    position: absolute;
    /* bottom: 0; */
    transition: all 0.5s;
  }
  p {
    color: #1d214c;

    mix-blend-mode: normal;
    opacity: 0.5;
  }
  h2 {
    text-align: center;
    /* letter-spacing: -2.23214px;
    font-weight: 700 !important; */
    color: #01b5ec;
  }
  section .images {
    height: 90vh;
  }

  .brand1 {
    top: 10px;
    left: 20%;
    width: 10%;
  }
  .brand2 {
    left: 36%;
    width: 15%;
  }

  .brand3 {
    right: 35%;
    width: 6%;
    top: 57px;
  }

  .brand4 {
    right: 7%;
    width: 15%;
    top: 0;
  }

  .brand5 {
    left: 2%;
    width: 18%;
    top: 250px;
  }
  .brand6 {
    top: 229px;
    left: 27%;
    width: 10%;
  }
  .brand7 {
    right: 30%;
    top: 220px;
    width: 12%;
  }
  .brand8 {
    top: 453px;
    left: 20%;
    width: 10%;
  }
  .brand9 {
    left: 33%;
    top: 410px;
    width: 10%;
  }
  .brand10 {
    top: 391px;
    right: 35%;
    width: 13%;
  }
  .brand11 {
    top: 473px;
    right: 23%;
    width: 10%;
  }

  .brand12 {
    top: 342px;
    right: 1%;
    width: 18%;
  }

  @media (max-width: 768px) {
    section .images {
      height: 110vh;
    }
    .brand1 {
      top: 77px;
      left: 38%;
      width: 15%;
    }
    .brand3 {
      right: 31%;
      width: 9%;
      top: 169px;
    }
    .brand7 {
      right: 6%;
      top: 200px;
    }
    .brand6 {
      top: 279px;
      left: 42%;
    }

    .brand9 {
      right: 2%;
      top: 326px;
      width: 18%;
      left: inherit;
    }
    .brand8 {
      top: 396px;
      left: 21%;
    }
    .brand10 {
      top: 531px;
      right: 78%;
      width: 17%;
    }
    .brand2 {
      left: 77%;
      width: 19%;
      top: 567px;
    }
    .brand11 {
      top: 473px;
      right: 35%;
    }
    .brand12 {
      top: 600px;
      right: 50%;
      width: 18%;
    }
  }

  @media (max-width: 576px) {
    .brand4 {
      right: 7%;
      width: 26%;
      top: 0;
    }

    .brand3 {
      right: 35%;
      width: 15%;
      top: 169px;
    }
    .brand7 {
      right: 6%;
      top: 200px;
      width: 20%;
    }

    .brand5 {
      left: 2%;
      width: 26%;
      top: 250px;
    }
    .brand6 {
      top: 279px;
      left: 42%;
      width: 17%;
    }
    .brand8 {
      top: 386px;
      left: 21%;
      width: 18%;
    }
    .brand11 {
      top: 466px;
      right: 38%;
      width: 16%;
    }
    .brand10 {
      top: 531px;
      right: 74%;
      width: 24%;
    }
    .brand12 {
      top: 600px;
      right: 41%;
      width: 22%;
    }
    .brand2 {
      left: 73%;
      width: 23%;
      top: 553px;
    }
    /* section .images {
      height: 100vh;
    } */
  }
`;

export default function index() {
  return (
    <Style>
      <section className="">
        <div className="container text-center mb-5">
          <p>BRAND MISSION</p>
          <h2>
            We want to make it easy for any African business to start, grow and
            succeed.
          </h2>
        </div>
        <div className="container-fluid position-relative pt-5">
          <div className="images">
            <div
              className="brand brand1"
              data-aos="fade-right"
              data-aos-duration="100"
            >
              <Image src={About1} alt="Luca Africa About1" />
            </div>
            <div
              className="brand brand2"
              data-aos="fade-right"
              data-aos-duration="400"
            >
              <Image src={About2} alt="Luca Africa About2" />
            </div>
            <div
              className="brand brand3"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <Image src={About3} alt="Luca Africa About3" />
            </div>
            <div
              className="brand brand4"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              <Image src={About4} alt="Luca Africa About4" />
            </div>
            <div
              className="brand brand5"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              <Image src={About5} alt="Luca Africa About5" />
            </div>
            <div
              className="brand brand6"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <Image src={About6} alt="Luca Africa About6" />
            </div>
            <div
              className="brand brand7"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <Image src={About7} alt="Luca Africa About7" />
            </div>
            <div
              className="brand brand8"
              data-aos="fade-left"
              data-aos-duration="400"
            >
              <Image src={About8} alt="Luca Africa About8" />
            </div>
            <div
              className="brand brand9"
              data-aos="fade-up"
              data-aos-duration="200"
            >
              <Image src={About9} alt="Luca Africa About9" />
            </div>
            <div
              className="brand brand10"
              data-aos="fade-up"
              data-aos-duration="400"
            >
              <Image src={About10} alt="Luca Africa About10" />
            </div>
            <div
              className="brand brand11"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <Image src={About11} alt="Luca Africa About11" />
            </div>
            <div
              className="brand brand12"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <Image src={About12} alt="Luca Africa About12" />
            </div>
          </div>
        </div>
      </section>
    </Style>
  );
}
