import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import ReactPlayer from 'react-player';
import { FaAngleRight } from "react-icons/fa";

const Home = () => {
  return (
    <section>
    <Container fluid id='home-bg'>
      <Container>
      <Row>
        <Col className='col-lg-6 col-md-6 col-sm-12 mt-5'>
          <h1 className='text-lead'>Modern CNC Solutions</h1>
          <ul className="styled fs-5">
            <li>New contemporary high-tech CNC tool machines</li>
            <li>Globally advanced CAD/CAM software</li>
            <li>Application of comprehensive design, production and control computerized systems.</li>
            <li>Creation of a fully equipped production control department</li>
          </ul>
        </Col>
        <Col className='col-lg-6 col-md-6 col-sm-12 mt-5 mb-5 d-none d-sm-block'>
        <img alt="" src="/images/CNC.jpg" height="100" className="img-fluid rounded-5" />
        </Col>
      </Row>
    </Container>
    </Container>
    <Container>
      <Row>
      <Col className='col-lg-6 col-md-6 col-sm-12 mt-5 mb-5'>
        <ReactPlayer url="\videos\cnc-machining-working-videos.mp4" controls={true} width={500}></ReactPlayer>
        </Col>
        <Col className='col-lg-6 col-md-6 col-sm-12 mt-5'>
          <h1 className='text-lead mt-5'>CNC Milling and CNC Turning</h1>
          <p className='fs-5'>CNC Milling and CNC Turning allow users to create patterns and add detail to metals that are impossible to do by hand. CNC Milling uses commands, codes programmed into the computer and set to run. The mill then drills and turns along axes to cut materials to dimensions entered into the computer.</p>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col className='work'>
             
        </Col>
      </Row>
    </Container>
    </section>
  )
}

export default Home