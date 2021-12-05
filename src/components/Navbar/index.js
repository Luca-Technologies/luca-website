import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import styles from "../../styles/Navbar.module.css";
//import "../styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../Assets/Images/Logo1.png";
import Logo1 from "../../Assets/Images/Logo.svg";
import NavbarImage from "../../Assets/Images/n.png";
import GooglePlay from "../../Assets/Images/button1.svg";
import AppStore from "../../Assets/Images/button2.svg";

import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";

const Style = styled.div`
  .bg-light {
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.05);
    background-color: white !important;
  }
  /* .mx-auto a {
    color: #01b5ec !important;
    font-size: 15px;
    padding-right: 1rem;
    padding-left: 1rem;
    text-transform: capitalize !important;
    font-weight: 600;
    background-color: transparent !important;
  } */
  .navbar-light .navbar-nav .nav-link {
    color: #01b5ec !important;
    font-size: 15px;
    padding-right: 1rem;
    padding-left: 1rem;
    /* letter-spacing: 1px; */
    text-transform: capitalize !important;
    font-weight: 600;
    background-color: transparent !important;
  }
  button {
    border: none;
    box-shadow: none !important;
  }
  .play button {
    border: none;
    background-color: transparent !important;
  }
  @media (max-width: 768px) {
    .navbar-light .navbar-nav .nav-link {
      color: #000000 !important;
      text-align: left;
      margin: 10px 0;
    }
    .showPlay div {
      padding-top: 5rem;
      /* background-image: url(${NavbarImage}); */
    }
  }
  @media (max-width: 767px) {
    .navbar-collapse {
      overflow-y: scroll;
      height: 100vh;
    }
  }
`;
export default function Index() {
  const [toggle, setToggle] = useState(false);
  return (
    <Style>
      <Navbar
        collapseOnSelect
        expand="md"
        bg="light"
        fixed="top"
        className="py-3"
      >
        <Container>
          <Link href="/">
            <a className="navbar-brand">
              <Image src={Logo1} alt="" width="120px" objectFit="cover" />
            </a>
          </Link>
          {/* <Navbar.Brand href="#home">
            <Image src={Logo} alt="" width="120px" objectFit="cover" />
          </Navbar.Brand> */}
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setToggle(!toggle)}
          >
            {!toggle ? (
              <FaBars className=" " size={30} color={"#01b5ec "} />
            ) : (
              <RiCloseFill size={30} />
            )}
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto" onClick={() => setToggle(false)}>
              <Nav.Link href="/#features">Features</Nav.Link>
              {/* <Nav.Link href="/about">About us</Nav.Link> */}
              <Link href="/about">
                <a className="nav-link">About us</a>
              </Link>
              <Link href="/faqs">
                <a className="nav-link">FAQs</a>
              </Link>
              <Link href="/contact">
                <a className="nav-link">Contact us</a>
              </Link>
              {/* <Nav.Link href="#pricing">FAQs</Nav.Link> */}
              {/* <Nav.Link href="/contact">Contact us</Nav.Link> */}
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Form className="d-flex">
              <Button variant="primary" className="btn-md d-none d-md-block">
                Get Luca
              </Button>

              <div className="showPlay mt-5 d-block d-md-none">
                <div>
                  <div className="play d-flex">
                    <button className="mr-3">
                      <Image src={GooglePlay} alt="" className="img-fluid" />
                    </button>
                    <button>
                      <Image src={AppStore} alt="" className="img-fluid" />
                    </button>
                  </div>
                </div>

                {/* <Image src={NavbarImage} alt="" objectFit={"cover"} /> */}
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Style>
  );
}
