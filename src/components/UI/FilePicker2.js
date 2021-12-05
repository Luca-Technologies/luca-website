import React, { useState } from "react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Dropzone from "react-dropzone";

import styled from "styled-components";

const Style = styled.div`
  p {
    text-align: center;
    cursor: pointer;
  }
  span {
    color: #0dcaf0;
  }
  section {
    padding: 2rem 0;
    border: 1px solid #e7ebec;
    background: #e7ebec;
    border-radius: 15px;
  }
`;
export default function FilePicker2() {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: ".jpeg,.png",
  });
  const [Image, setImage] = useState([]);

  console.log(Image[0]?.name);
  return (
    <Style>
      <Dropzone onDrop={(acceptedFiles) => setImage(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input
                type="file"
                accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                {...getInputProps()}
              />
              {isDragAccept && <p>All files will be accepted</p>}
              {isDragReject && <p>Some files will be rejected</p>}
              {!isDragActive && <p>Drop some files here ...</p>}
              <p>
                <span>Upload your photo</span> or drag and drop here
              </p>
              <p>{Image[0]?.name}</p>
            </div>
          </section>
        )}
      </Dropzone>
    </Style>
  );
}
