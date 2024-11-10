import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container fluid className="text-center text-white py-5">
        <h1 className="footer-title">Stay Connected with Us</h1>
        <h4 className="footer-subtitle mt-3">Join our community and never miss an update</h4>
        
        <div className="email-subscription mt-4 mb-5">
          <Form className="d-flex justify-content-center align-items-center">
            <Form.Control
              type="email"
              placeholder="Enter your email"
              className="email-input"
            />
            <Button variant="danger" className="join-button">Join Now</Button>
          </Form>
        </div>
        
        <div className="divider mt-5">
          <hr className="footer-line" />
        </div>
        
        <Row className="footer-bottom align-items-center mt-5">
          <Col md={6} className="text-start">
            <h3>HYPERESTATE</h3>
          </Col>
          <Col md={6} className="text-end">
            <ul className="footer-links">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Blog</li>
              <li>Content</li>
            </ul>
          </Col>
        </Row>
        
        <div className="copyright mt-4">
          <h5>&copy; 2024 Anidi Samuel. All rights reserved.</h5>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
