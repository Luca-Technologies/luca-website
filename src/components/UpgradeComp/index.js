import React from "react";
import Image from "next/image";
import GooglePlay from "../../Assets/Images/Elements/Buttons/Market/Google Play.png";
import MobileImage from "../../Assets/Images/phone2mobile.png";
import PhoneImage from "../../Assets/Images/phone2.png";
import styled from "styled-components";

const Style = styled.div`
  .upgrade {
    padding-bottom: 0;
    padding-top: 9rem;
    background: #f8fdff;
  }
  .upgrade .show img {
    width: 60%;
  }
  .upgrade h5 {
    color: #1d214c;
    font-weight: 600;
  }
  p {
    color: #594d6d;
    font-weight: 400;
  }

  h1 {
    padding: 0px 123px;
  }
  .title {
    padding: 0px 10rem;
    font-weight: 600;
    color: #959595 !important;
  }
  @media (min-width: 576px) {
    h1 {
      padding: 0px 20px;
    }
    .title {
      padding: 0px 3rem;
    }
  }
  @media (min-width: 326px) {
    h1 {
      padding: 0px 0px;
    }
    .title {
      padding: 0px 0px;
    }
  }
  @media (min-width: 768px) {
    h1 {
      padding: 0px 40px;
    }
    .title {
      padding: 0px 5rem;
    }
  }
  @media (min-width: 992px) {
    h1 {
      padding: 0px 123px;
    }
    .title {
      padding: 0px 10rem;
    }
  }
  @media (min-width: 1200px) {
    h1 {
      padding: 0px 123px;
    }
    .title {
      padding: 0px 10rem;
    }
  }
`;

export default function index() {
  return (
    <Style id="features">
      <section className="upgrade">
        <div className="container text-center">
          <h1 className="mb-4 d-none d-md-block" data-aos="fade-down">
            Upgrade your business to the next level
          </h1>
          <h1 className="mb-4 d-block d-md-none" data-aos="fade-down">
            Keep track of your daily expenses with Luca
          </h1>
          <p className="title mb-5">
            By using Luca, you will be able to do the things that you didn’t
            think were possible on your mobile phone. Features: Track your
            expenditure and profit for each account.
          </p>
          <div>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-4  pb-4" data-aos="fade-right">
                <div className="mb-5">
                  <h5>Real-time Calculations</h5>
                  <p className="">
                    Luca gives you instant balance. Now, you don’t have to pick
                    up a calculator even once.
                  </p>
                </div>
                <div>
                  <h5>Inventory Management</h5>
                  <p>
                    Quickly add thousands of inventory items by uploading a CSV
                    spreadsheet
                  </p>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-up">
                <div className="d-none d-md-block">
                  <Image src={PhoneImage} alt="Luca Africa PhoneImage" />
                </div>
                <div className="d-block d-md-none show">
                  <Image src={MobileImage} alt="Luca Africa MobileImage" />
                </div>
              </div>
              <div className="col-md-4 pb-4" data-aos="fade-left">
                <div className="mb-5">
                  <h5>Invoice</h5>
                  <p>
                    Create custom invoices with your preferred colours and
                    logos, then share with your customers
                  </p>
                </div>
                <div>
                  <h5>Reports</h5>
                  <p>Quickly share PDF formated reports with others</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Style>
  );
}
