// Resident.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaBed, FaShower, FaArrowRight } from "react-icons/fa";
import "../assets/css/resident.css";
import image1 from "../assets/images/house 1.svg";
import image2 from "../assets/images/house 2.svg";
import image3 from "../assets/images/house 1.svg";

import Adobe from "../assets/images/Adobe.svg";
import Amazon from "../assets/images/Amazon.svg";
import Google from "../assets/images/Google.svg";
import Paypal from "../assets/images/Paypal.svg";
import Webflow from "../assets/images/Webflow.svg";

const Resident = () => {
  const residentCards = [
    { image: image1, price: "$59,345", title: "Home in downtown Los Angeles" },
    { image: image2, price: "$79,345", title: "Modern loft in San Francisco" },
    { image: image3, price: "$53,542", title: "Apartment Downtown San Diego" },
  ];

  return (
    <section className="resident-section">
      <Container fluid className="resident-top-section">
        <Row className="align-items-center justify-content-between">
          <Col>
            <h1 className="resident-title">Popular Resident</h1>
          </Col>
          <Col className="text-end">
            <h4 className="explore-more">
              Explore More <FaArrowRight />
            </h4>
          </Col>
        </Row>
        <Row className="resident-cards">
          {residentCards.map((card, index) => (
            <Col key={index} md={4}>
              <Card className="resident-card">
                <Card.Img variant="top" src={card.image} alt="House" />
                <Card.Body>
                  <h5 className="price-tag">{card.price}</h5>
                  <h4>{card.title}</h4>
                  <hr className="card-line" />
                  <div className="card-details">
                    <span>2500 sqft</span>
                    <span>
                      <FaBed className="icon" /> 3
                    </span>
                    <span>
                      <FaShower className="icon" /> 2
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container fluid className="resident-bottom-section">
        <Row className="align-items-center">
          <Col md={6}>
            <h3>Anidi Samuel</h3>
            <h4>Founder of HYPERESTATE</h4>
          </Col>
          <Col md={6}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              euismod, lorem eget <br />malesuada sodales, justo purus consectetur
              quam, nec tincidunt odio orci vel enim.
            </p>
          </Col>
        </Row>
        <hr className="resident-line" />
        <Row className="bottom-images">
          {[Amazon, Google, Webflow, Adobe, Paypal].map((image, index) => (
            <Col key={index} xs={6} md={2} className="bottom-image">
              <img src={image} alt={`Logo ${index + 1}`} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Resident;
