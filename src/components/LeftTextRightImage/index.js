import styled from "styled-components";
import React from "react";
import Image from "next/image";
//
import TitleSection from "../TitleSection";
import AppStoreButtons from "../AppStoreButtons";

const Style = styled.div``;

export default function index({
  title,
  description,
  image,
  showAppStoreButtons,
  className,
  id,
}) {
  return (
    <Style>
      <section
        className={`pt-[150px] sm:pt-10 ${className}`}
        data-aos="fade-up"
        id={id}
      >
        <div className="container">
          <div className="flex md:flex-col justify-between">
            <div className="sm:mb-10">
              <TitleSection title={title} description={description} />
              {/* show app store buttons */}
              {showAppStoreButtons === true && (
                <div className="mt-10">
                  <AppStoreButtons />
                </div>
              )}
            </div>
            <div
              className="max-w-[600px]"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <Image src={image} alt="" />
            </div>
          </div>
        </div>
      </section>
    </Style>
  );
}
