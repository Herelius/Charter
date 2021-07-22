import React from "react";
import { Carousel, Form, Button } from "react-bootstrap";
import Chart from "../components/chart";

import "./home.css";
import imageExemple1 from "../assets/chart1.png";
import imageExemple2 from "../assets/chart2.png";
import imageExemple3 from "../assets/chart3.png";

const Home = () => {
  return (
    <>
      <div className="message">
        <h2>
          If not connected: sign in to be able to save your graphs on your
          account
        </h2>
      </div>
      <h2 className="text">
        Here some exemples to see what you can do with Charter
      </h2>
      <Carousel controls className="carouselContainer">
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={imageExemple1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={imageExemple2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={imageExemple3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="formContainer">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" size="lg" type="submit">
            Generate
          </Button>
        </Form>
      </div>
      <div className="chartContainer">
        <Chart />
      </div>
    </>
  );
};

export default Home;
