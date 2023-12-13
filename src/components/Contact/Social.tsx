import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import "./Social.css";

const Social = () => {
  return (
    <Container style={{ padding: "30px" }}>
      <Row>
        <Col md={12} className="contact-social">
          <div className="contact-text">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and{" "}
              <span className="yellow">connect.</span>
            </p>
          </div>
          <ul className="contact-social-links">
            <li className="contact-icons">
              <a
                href="https://github.com/sabari-vr"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://github.com/sabari-vr"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <RiTwitterXFill />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://www.linkedin.com/in/sabari-v-r-713043219/"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://www.instagram.com/sabari_v_r/"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Social;
