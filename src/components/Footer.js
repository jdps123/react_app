/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Footer() {
  const currDate = new Date();
  const currYear = currDate.getFullYear();

 // function MyFunction(num1){
 //  console.log(num1*num1)
 // }
 // MyFunction(10)

/* function Heading (props){
  console.log(props)
 }
 Heading()*/


  return (
    <footer className="#">
        <Container fluid className="bg-secondary">
      <Container data-bs-theme="dark">
        <Row className="py-5">
          <Col className="" lg={3} sm={12}>
            <img alt="" src="/images/logo.png" width="255" height="66" className="d-inline-block align-top" />
          </Col>
          <Col lg={4} sm={6} xs={12}>
            <h6 className="text-center text-md-start mt-4 mt-lg-0">Services</h6>

          </Col>
        </Row>
      </Container>
      <Container fluid id="copyright">
        <Container>
          <Row className="py-2">
            <Col xs={12} sm={4}>
              <p className="text-white text-center text-md-start m-0">&copy; {currYear}  Shiv Engineering Designed By JD Bisht.</p>
            </Col>
            <Col xs={12} sm={8}>
              <div className="d-flex justity-content-center float-md-end text-white">
                <a className="px-3" href="/terms-of-use">
                  Terms of use
                </a>
                <a className="px-3" href="/privacy-policy">
                  Privacy Policy
                </a>
                <a className="px-3" href="/cookie-policy">
                  Cookie Policy
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      </Container>
    </footer>
  );
}
