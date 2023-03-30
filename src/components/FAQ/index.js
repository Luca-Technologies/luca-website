import styled from "styled-components";
import React from "react";
import Link from "next/link";
//
import TitleSection from "../TitleSection";
import { FAQs } from "../../Data/index";
import { FaChevronRight } from "react-icons/fa";

const Style = styled.div`
  .main-box {
    background: #f1f1f3;
    border-radius: 30px;
  }
  .title-image {
    display: flex;
    justify-content: space-between;
  }
  .faq-points {
    padding: 3rem;
  }
  @media (max-width: 768px) {
    .faq-points {
      padding: 0.25rem;
    }
  }
`;

export default function index({}) {
  return (
    <Style>
      <section
        id="faqs"
        className="main-box container relative"
        data-aos="fade-up"
      >
        <div className="row faq-points">
          <div className="flex text-center justify-center">
            <TitleSection
              isFullWidth={true}
              title="Frequently Asked Questions"
              description="Need help using Luca? Find answers to frequently asked questions here"
            />
          </div>
          <FaqItems />

          <Link href="/faqs">
            <h6
              style={{ marginTop: 40 }}
              className="text-center  cursor-pointer"
            >
              See all FAQs
            </h6>
          </Link>
        </div>
      </section>
    </Style>
  );
}

const FaqItems = () => {
  const [isActive, setIsActive] = React.useState(null);
  return (
    <div className="w-full">
      {FAQs.map((item, index) => (
        <FaqSingleItem
          title={item.title}
          description={item.description}
          isOpen={isActive === index}
          duration={index}
          onClick={() => setIsActive(index === isActive ? null : index)}
        />
      ))}
    </div>
  );
};

const FaqSingleItem = ({ title, description, onClick, isOpen, duration }) => (
  <button
    onClick={onClick}
    data-aos="fade-up"
    // data-aos-duration={1000 * duration}
    className="bg-[#f8f8f9] border w-full border-white mt-2 rounded-md relative"
  >
    <div className="flex justify-between w-full  p-3 items-center">
      <h6 className="text-secondaryColor">{title}</h6>
      <FaChevronRight
        className={`text-secondaryColor transition-all ${
          isOpen ? "rotate-90" : ""
        }`}
      />
    </div>
    <div
      className={`overflow-hidden transition-all border-t  ${
        isOpen
          ? "border-gray-200 translate-y-0"
          : "translate-y-[100px] h-0 border-transparent"
      }`}
    >
      <div className="p-4">{description}</div>
    </div>
  </button>
);
