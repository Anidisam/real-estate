import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../assets/css/hero.css";
import heroHouse from "../assets/images/hero-house.svg";

const Hero = () => {
  return (
    <section className="hero-section">
      <Container fluid>
        <Row className="hero-row">
          <Col
            md={8}
            className="hero-left d-flex flex-column justify-content-center"
          >
            <h1 className="hero-title">
              THE BEST PLACE <br />
              TO FIND YOUR <br />
              DREAM HOUSE
            </h1>
            <p className="hero-description">
              We Are Real Estate Agency That Will Help You In Designing A <br />
              Modern And Minimalist Dream House. Let's Discuss
            </p>

            <Form className="search-bar d-flex align-items-center">
              <FaMapMarkerAlt className="location-icon" />
              <Form.Control
                type="text"
                placeholder="Search location"
                className="search-input"
              />
              <Button className="search-button">Search</Button>
            </Form>

            <Row className="statistics mt-4">
              <Col xs={4} className="stat">
                <h1>1200+</h1>
                <h4>Premium Product</h4>
              </Col>
              <Col xs={4} className="stat">
                <h1>4000+</h1>
                <h4>Happy Customer</h4>
              </Col>
              <Col xs={4} className="stat">
                <h1>240+</h1>
                <h4>Award Winning</h4>
              </Col>
            </Row>
          </Col>

          <Col
            md={4}
            className="hero-right d-flex align-items-center justify-content-center"
          >
            <img src={heroHouse} alt="House" className="house-image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
