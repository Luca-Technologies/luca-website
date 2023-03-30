import React from "react";
import styled from "styled-components";

const Style = styled.div``;

export default function index({
  title,
  description,
  isWhiteTheme,
  isFullWidth,
}) {
  return (
    <Style>
      <div className={`sm:text-center`}>
        <h3
          className={`mb-3 ${
            isWhiteTheme == true ? "text-white" : "!text-secondaryColor"
          } ${isFullWidth === true ? "w-full" : "max-w-[380px]"}`}
        >
          {title}
        </h3>
        <p
          className={`${
            isWhiteTheme == true ? "text-white" : "text-secondaryColor"
          } max-w-[380px]`}
        >
          {description}
        </p>
      </div>
    </Style>
  );
}
