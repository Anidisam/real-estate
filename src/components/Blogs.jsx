import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../assets/css/blogs.css";
import blogImage1 from "../assets/images/white-house.svg";
import blogImage2 from "../assets/images/orange-house.svg";
import blogImage3 from "../assets/images/black-house.svg";

const Blogs = () => {
  const blogs = [
    {
      image: blogImage1,
      date: "28/08/2020",
      title: "Introduction To Real Estate Investing Recording",
    },
    {
      image: blogImage2,
      date: "15/09/2021",
      title: "How I Creatively Got Into Real Estate (Twice)",
    },
    {
      image: blogImage3,
      date: "05/11/2022",
      title: "The Power Of Real Estate To Create Wealth",
    },
  ];

  return (
    <section className="blogs-section">
      <Container>
        <Row className="justify-content-end">
          <Col md={12} className="text-end">
            <h1 className="blogs-title">Our Blogs</h1>
          </Col>
        </Row>
        <Row className="mt-4">
          {blogs.map((blog, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="blog-card">
                <Card.Img variant="top" src={blog.image} alt="Blog Image" />
                <Card.Body>
                  <p className="blog-date">{blog.date}</p>
                  <hr className="date-line" />
                  <h2 className="blog-title">{blog.title}</h2>
                  <Button variant="primary" className="read-more-btn">
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blogs;
