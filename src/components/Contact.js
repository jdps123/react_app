
// @ts-nocheck
"use client";

import { Col, Row, Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";


export default function ContactUs() {

  return (
    <>
      <section id='contact-bg'>
        <Container>
          <Row className="align-items-center">
            <Col xl={{ span: 8, offset: 2 }} xs={12}>
              <h1 className="contact-head text-center mt-3">Get In Touch</h1>
              <p className="text-center fs-5">
                Leave us your details, comments and queries and stay updated with the latest happenings in the industry by filling the form below.
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Col xl={{ span: 8, offset: 2 }} xs={12} className="rounded-5 bg-darkblue p-5">
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} sm={6} xs={12} className="mb-3" controlId="formGroupName">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    name="username"
                    
                  
                    
                    required
                    autoComplete="off"
                  />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} sm={6} xs={12} controlId="formGroupEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="useremail"
              
                   
                    required
                    autoComplete="off"
                  />
                  <Form.Control.Feedback type="invalid">errors.username</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} sm={6} xs={12} className="mb-3" controlId="formGroupPhone">
                  <Form.Label>Phone:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    
                    autoComplete="off"
                  />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} sm={6} xs={12} className="mb-3" controlId="formGroupSubject">
                  <Form.Label>Subject:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Subject"
                    name="subject"
                
                    required
                    autoComplete="off"
                  />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message:</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Message"
                    name="message"
                    
                    required
                    autoComplete="off"
                  />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <p className="mt-3 fs-6 small">
                  <small>
                    We will use your information to communicate with you about this general contact form and other solutions, events and related resources that
                    may be of interest to you. You may opt-out at any time to unsubscribe by sending an email to shivengg29@gmail.com. For more
                    information, please see our Privacy Policy.
                  </small>
                </p>
              </Row>
              <Button type="submit" className="btn btn-primary btn-lg d-block mx-auto px-5">
                Submit
              </Button>
            </Form>
          </Col>
        </Container>
      </section>
    </>
  );
}