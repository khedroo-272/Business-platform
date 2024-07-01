// pages/HomePage.js
import React from "react";
import FirstSlide from "../images/FirstSlide.jpg";
import ThirdSlide from "../images/ThirdSlide.jpg";
import Lssgb from "../images/Lssgb.jpg";
import Course from "./Course";
import {Container, Row, Col} from "react-bootstrap";
const TrendingCourses = () => {
  return (
    <>
      <Container className="mx-auto p-4 my-5 bordered">
        <h3>Expand your career opportunities with Business Development</h3>
        <p className="mb-2">Take one of Business Platform range of Business Development courses and master the art of growing a business. From understanding market dynamics to building effective strategies, Choose from a variety of courses that will appeal to aspiring entrepreneurs, managers, and business professionals.</p>
        <Row>
          <Col md={6} lg={3}>
            <div className="m-2">
              <Course name='CSCP' description="Certified In Supply Chain Professional" image={FirstSlide} hours='60' className="course"/>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="m-2">
               <Course name='LSSGB' description="Lean Six Sigma Green Belt" image={ThirdSlide} hours='60' className="course"/>
            </div>
          </Col>
          <Col md={6} lg={3}>
          <div className="m-2">
               <Course name='LSSYB' description="Lean Six Sigma Yellow Belt" image={ThirdSlide} hours='60' className="course"/>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="m-2">
               <Course name='LSSBB' description="Lean Six Sigma Black Belt" image={ThirdSlide} hours='60' className="course"/>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="m-2">
               <Course name='CPIM' description="Certified In Planning and Inventory Management" image={FirstSlide} hours='60' className="course"/>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="m-2">
               <Course name='CIPS' description="Level4 Diploma In Pocurement & Supply Chain" image={ThirdSlide} hours='60' className="course"/>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TrendingCourses;