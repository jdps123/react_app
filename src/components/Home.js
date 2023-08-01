import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";
// import BgVideo from 'react_app\public\videos\cnc-flattering-machine-videos.mp4'

const Home = () => {
  return (
    <section className="bg-dark">
      <Container fluid id="home-bg" className="p-0 m-0">
        <video
          src="videos\cnc-flattering-machine-videos.mp4"
          typeof="video/mp4"
          autoPlay
          playsinline
          muted
          loop
          preload="yes"
          className="video-bg position-absolute w-100 "
        />
        <Container fluid id="card" className="pt-5 m-auto">
          <Row className="p-4 w-100 ">
            <Col className="col-lg-6 col-md-6 col-sm-12 mt-5">
              <h1 className="text-lead ">Modern CNC Solutions</h1>
              <ul className="styled fs-5">
                <li>New contemporary high-tech CNC tool machines</li>
                <li>Globally advanced CAD/CAM software</li>
                <li>
                  Application of comprehensive design, production and control
                  computerized systems.
                </li>
                <li>
                  Creation of a fully equipped production control department
                </li>
              </ul>
              {/* button add */}
              <div class="d-grid gap-2">
                <button type="button" name="" id="" class="btn btn-primary">
                  Button
                </button>
              </div>
            </Col>
            <Col className="col-lg-6 col-md-6 col-sm-12 mt-5 mb-5 d-none d-sm-block">
              <img
                alt=""
                src="/images/CNC.jpg"
                className="img-fluid rounded-4"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container id="card">
        <Row>
          <Col className="col-lg-6 col-md-6 col-sm-12 mt-5 mb-5">
            <ReactPlayer
              url="\videos\cnc-machining-working-videos.mp4"
              controls={true}
              width={500}
            ></ReactPlayer>
          </Col>
          <Col className="col-lg-6 col-md-6 col-sm-12 mt-5">
            <h1 className="text-lead mt-5">CNC Milling and CNC Turning</h1>
            <p className="fs-5">
              CNC Milling and CNC Turning allow users to create patterns and add
              detail to metals that are impossible to do by hand. CNC Milling
              uses commands, codes programmed into the computer and set to run.
              The mill then drills and turns along axes to cut materials to
              dimensions entered into the computer.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
