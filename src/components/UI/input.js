import React from "react";
import styled from "styled-components";

const Style = styled.div`
  input {
    background: #e7ebecbf;
    border-radius: 10px;
    border: 1px solid #e7ebecbf;
  }
`;

export default function input({ label, ...props }) {
  return (
    <Style>
      <div className="mb-5">
        {label && (
          <label htmlFor="inputPassword4">
            Website <span>*</span>
          </label>
        )}
        <input className="form-control mb-4 py-2" {...props} />
      </div>
    </Style>
  );
}
