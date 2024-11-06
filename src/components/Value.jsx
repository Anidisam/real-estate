import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { FaCheckCircle, FaPlus, FaTimes } from "react-icons/fa";
import rightHouse from "../assets/images/house 0.svg"; // Update image path

function ValueSection() {
  return (
    <Container className="my-5">
      <Row>
        {/* Left Section - Image */}
        <Col xs={12} md={6} className="p-0 mb-4 mb-md-0">
          <img
            src={rightHouse} // Replace with the actual path to the image
            alt="Building"
            style={{
              width: "100%", // Ensures the image takes full width
              height: "auto", // Adjusts height for responsiveness
              objectFit: "cover",
            }}
          />
        </Col>

        {/* Right Section - Content */}
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column justify-content-center"
        >
          <h2 className="fw-bold mb-3">Value We Give To You</h2>
          <p className="mb-4">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Ut Aliquam,
            Purus Sit Amet Luctus Venenatis, Lectus Magna.
          </p>

          {/* Accordion Section */}
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <FaCheckCircle className="me-2 text-danger" />
                Best Interest Rates On The Market.
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <FaPlus className="me-2 text-danger" />
                Prevent Unstable Prices
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                aliquam, purus sit amet luctus venenatis.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <FaPlus className="me-2 text-danger" />
                Best Price On The Market
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                aliquam, purus sit amet luctus venenatis.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <FaPlus className="me-2 text-danger" />
                Security Of Your Data
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                aliquam, purus sit amet luctus venenatis.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default ValueSection;
