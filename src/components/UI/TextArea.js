import React from "react";
import styled from "styled-components";
const Style = styled.div`
  label {
    font-size: 18px;
  }
  textarea {
    background: #e7ebecbf;
    border-radius: 10px;
    border: 1px solid #e7ebecbf;
  }
`;

export default function TextArea({ label, ...props }) {
  return (
    <Style>
      <div className="mb-5">
        {label && (
          <label className="mb-3">
            {label} <span>*</span>
          </label>
        )}
        <textarea className="form-control mb-4" rows="4" {...props}></textarea>
      </div>
    </Style>
  );
}
