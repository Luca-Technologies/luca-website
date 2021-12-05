import React from "react";
import styled from "styled-components";

import Input from "../UI/input";
import FilePicker from "../UI/FilePicker";
import TextArea from "../UI/TextArea";

const Style = styled.div`
  padding: 5rem 0;

  button {
    width: 100%;
  }

  label {
    font-size: 15px;
  }
  .border {
    border-radius: 10px;
  }

  hr {
    background-color: #00000042;
  }
  input {
    box-shadow: none !important;
  }
`;

export default function index() {
  return (
    <Style>
      <div className="container">
        <div className="mb-5">
          <h5>Personal information</h5>
          <hr />
        </div>
        <div className="border ">
          <div className="py-5 px-4">
            <form>
              <div className="row">
                <div className="form-group col-md-6">
                  <Input type="text" placeholder="First Name" />
                </div>
                <div className="form-group col-md-6">
                  <Input type="text" placeholder="Last Name" />
                </div>
              </div>
              <div className="form-group ">
                <Input type="email" placeholder="Email" />
              </div>
              <div className="form-group ">
                <Input type="text" placeholder="Headline (Optional)" />
              </div>
              <div className="form-group ">
                <Input type="text" placeholder="Phone" />
              </div>
              <div className="form-group ">
                <Input type="text" placeholder="Address" />
              </div>
              <div className="form-group ">
                <FilePicker
                  onChange={() => {}}
                  text={
                    <div>
                      <span>Upload your photo</span> or drag and drop here
                    </div>
                  }
                />
              </div>
            </form>
          </div>
        </div>
        <div className="mb-5">
          <div className="border mt-5 ">
            <div className="py-4 px-4">
              <div className="mb-5">
                <h5>Resume</h5>
              </div>
              <form>
                <div className="form-group ">
                  <FilePicker
                    onChange={() => {}}
                    placeholder=""
                    text={
                      <div>
                        <span> Upload a file</span> or drag and drop here
                      </div>
                    }
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <h5>Details</h5>
        </div>
        <hr />
        <div className="border ">
          <div className="py-5 px-4">
            <form>
              <div className="form-group ">
                <TextArea label="Cover letter (Optional)" type="text" />
              </div>
              <div className="form-group ">
                <Input
                  type="text"
                  placeholder="What is your salary expectation?"
                />
              </div>
              <div className="form-group ">
                <Input type="text" placeholder="What is your notice period?" />
              </div>
            </form>
          </div>
        </div>
        <div className="my-5">
          <button className="btn-primary btn-md">Submit application</button>
        </div>
      </div>
    </Style>
  );
}
