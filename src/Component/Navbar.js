import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import About from "./About";

const Home = () => {
  return (
    <BrowserRouter>
      <div className="Nav-parent-class">
        <div className="Navbar_name">
          <p>Smriti Kumari</p>
        </div>
        <Navbar>
          <Container>
            <Nav className="me-auto">
              <div className="nav-elemnet">
                <div className="nav-inner-ele">
                  <Link to="#home" className="link">
                    Home
                  </Link>
                </div>
                <div className="nav-inner-ele">
                  <Link to="#about" className="link">
                    About
                  </Link>
                </div>
                <div className="nav-inner-ele">
                  <Link to="#project" className="link">
                    Project
                  </Link>
                </div>
                <div className="nav-inner-ele">
                  <Link to="#resume" className="link">
                    Resume
                  </Link>
                </div>
                <div className="nav-inner-ele">
                  <Link to="#contact" className="link">
                    Contact us
                  </Link>
                </div>
              </div>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </BrowserRouter>
  );
};

export default Home;
