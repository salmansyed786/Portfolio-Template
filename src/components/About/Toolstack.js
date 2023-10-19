import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiEclipseide
} from "react-icons/si";
import { BsWindows, BsUnity, BsGithub } from "react-icons/bs";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <BsWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsUnity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsGithub />
      </Col>
    </Row>
  );
}

export default Toolstack;
