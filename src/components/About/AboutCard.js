import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Salman Syed </span>
            from <span className="purple"> Dearborn, Michigan.</span>
                      <br /> I am a recent graduate in Computer Science from the <span className="purple">University of Michigan.</span>
            <br />
                      I am currently looking for employment as a software engineer near <span className="purple">Franklin, Wisconsin.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing and Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Replace fear with curiosity."{" "}
          </p>
                  <footer className="blockquote-footer">Steven Spielberg</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
