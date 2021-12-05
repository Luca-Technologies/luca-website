import React, { useState } from "react";
import styled from "styled-components";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { ImMinus } from "react-icons/im";
import { TiPlus } from "react-icons/ti";

const Style = styled.div`
  section {
    padding: 0;
  }

  .accordion__item {
    margin-bottom: 2rem;
  }
  @media (max-width: 460px) {
    .accordion__item {
      margin-bottom: 1rem;
    }
  }
  .wrapper {
    /* border: 1px solid; */
    height: 70px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    margin-bottom: 1rem;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 0px 0px 23.5919px 3.84054px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  .wrapper span {
    /* background: #171b42; */
    padding: 50px 15px;
    overflow: hidden;
    color: #171b42;
    font-size: 15px !important;
    font-weight: 600;
  }
  .wrapper p {
    color: #171b42 !important;
    font-size: 14px !important;
    font-weight: 500;
  }
  .icon-wrapper {
    background: #171b42;
    padding: 50px 35px !important;
  }
  .title {
    color: #01b5ec;
    letter-spacing: 3px;
  }
  .description {
    color: #171b42;
    font-weight: 500;
  }
  .subtitle {
    color: #01b5ec;
    letter-spacing: normal;
    font-weight: 600;
    /* color: blue; */
  }
`;

export default function Index({ data = [], backgroundColor, mainTitle }) {
  const [toggle, setToggle] = useState(null);
  return (
    <Style className={backgroundColor ? "firstBackground" : "secondBackground"}>
      <section>
        <div className="container">
          <div className="mb-5">
            <p className="text-uppercase title">{mainTitle}</p>
          </div>
          <Accordion>
            {data.map((item, index) => (
              <AccordionItem key={index} onClick={() => setToggle(index)}>
                <AccordionItemHeading className="my-4">
                  <AccordionItemButton>
                    <div className="wrapper">
                      <span className="me-3 icon-wrapper">
                        {toggle === index ? (
                          <TiPlus color={"#FFFFFF"} />
                        ) : (
                          <ImMinus color={"#FFFFFF"} />
                        )}
                      </span>
                      <span> {item?.title}</span>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="my-4 pe-3 description">{item?.description}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Style>
  );
}
