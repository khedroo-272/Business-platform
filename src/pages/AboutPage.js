// pages/HomePage.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import About from '../images/About.webp'
import { Card } from "react-bootstrap";
const AboutPage = () => {
  return (
    <>
    <Row className="w-100 h-100rvh">
        <Col lg={6} className=''>
          <Card className="no-border" style={{ width: '100%'}}>
            <Card.Img variant="top" src={About} className="h-100rvh" />
          </Card>
        </Col>
          <Col lg={6} className='p-3 bc-grey d-flex align-items-center'>
            <Container className="mx-auto">
              <Card className="no-border bc-grey" style={{ width: '100%'}}>
                <h1 className='text-center mb-3'>About Us</h1>
                <p>We are an engineering consulting company delivering several solutions, optimum and sustainable, especially in the industrial field. Whatever the industry, you can rely on our experts to provide you with specialized business solutions to make your business grow, simpler and more efficient. We collaborate with our customers to offer independent services that will help them to reduce cost streamline their processes and operate in a more profitable manner.
                We are constantly looking beyond customers’ and society’s expectations in order to deliver market-leading services wherever they are needed. Also providing specialized business solutions that improve quality, safety, productivity, reduce risk, and eliminate waste. We help our customers to run the business in the most professional model.
                In addition, we provide training courses in several areas like lean management, supply chain, project management, agile … etc</p>
              </Card>
            </Container>
        </Col>
      </Row>
    </>
  );
};

export default AboutPage;
