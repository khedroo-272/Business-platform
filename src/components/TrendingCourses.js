// pages/HomePage.js
import React from "react";
import CIPS from "../images/CIPS.webp";
import CPIM from "../images/CPIM.webp";
import CLTD from "../images/CLTD.webp";
import CSCP from "../images/CSCP.webp";
import BB from "../images/BB.webp";
import GB from "../images/GB.webp";
import YB from "../images/YB.webp";
import DA from "../images/DataAnalysis.jpg";
import Course from "./Course";
import {Container, Row, Col} from "react-bootstrap";
const TrendingCourses = () => {
  const cpim = {
    name:'CPIM -V8',
    description:"Certified In Planning and Inventory Management" ,
    hours: '60+ Hours',
    modules : ['Module 1: Supply Chains and Strategy','Module 2: Sales and Operations Planning','Module 3: Demand','Module 4: Supply','Module 5: Detailed Schedules','Module 6: Inventory','Module 7: Distribution','Module 8: Quality, Technology and Continuous Improvement',]
  }
  const cips = {
    name:'CIPS',
    description:"Level4 Diploma In Pocurement & Supply Chain" ,
    hours: '80+ Hours',
    modules : ['L4M1: Scope and Influence of Procurement and Supply','L4M2: Defining Business Need','L4M3: Commercial Contracting','L4M4: Ethical and Responsible Sourcing','L4M5: Commercial Negotiation','L4M6: Supplier Relationships','L4M7: Whole Life Asset Management','L4M8: Procurement and Supply in Practice',]
  }
  const cscp = {
    name:'CSCP',
    description:"Certified In Supply Chain Professional" ,
    hours: '60+ Hours',
    modules : ['Module 1: Supply Chains, Demand Management, and Forecasting', 'Module 2: Global Supply Chain Networks','Module 3: Sourcing Products and Services','Module 4: Internal Operations and Inventory','Module 5: Forward and Reverse Logistics','Module 6: Supply Chain Relationships','Module 7: Supply Chain Risk','Module 8: Optimization, Sustainability, and Technology'],
  }
  const sixSigmaGB = {
    name:'LSSGB',
    description:"Lean Six Sigma Green Belt" ,
    hours: '40+ Hours',
    modules : ['1.0 Define Phase', '2.0 Measure Phase','3.0 Analyze Phase','4.0 Improve Phase','5.0 Control Phase',]
  }
  const sixSigmaYB = {
    name:'LSSYB',
    description:"Lean Six Sigma Yellow Belt" ,
    hours: '60+ Hours',
    modules : ['1.0 Define Phase', '2.0 Measure Phase','3.0 Analyze Phase','4.0 Improve Phase','5.0 Control Phase',]
  }
  const sixSigmaBB = {
    name:'LSSBB',
    description:"Lean Six Sigma Black Belt" ,
    hours: '60+ Hours',
    modules : ['1.0 Define Phase', '2.0 Measure Phase','3.0 Analyze Phase','4.0 Improve Phase','5.0 Control Phase',]
  }
  const cltd_course = {
    name:'CLTD',
    description:"Certified In Logistics, Transportaion AND Distribution" ,
    hours: '60+ Hours',
    modules : ['Module 1: Logistics overview and strategy', 'Module 2: Logistics network design','Module 3: Sustainability and reverse logistics','Module 4: Capacity planning and demand management','Module 5: Ordermanagement', 'Module 6: Inventory management', 'Module 7: Warehouse management', 'Module 8: Global logistics and transportation']
  }
  const data_analysis_course = {
    name:'Data Analysis Course',
    description:"With Excel & Power BI" ,
    hours: '60+ Hours',
    modules : [`Excel:`,`
Basics & Lists
`,`Conditional Formatting`,`
`,`Functions & Formulas`,`
`,`VLOOKUP & INDEX/MATCH`,`
`,`Sorting & Filtering`,`
`,`Pivot Tables & Charts`,`
`,`Data Analysis Tools`,`
`,`And`,`
`,`Power BI:`,`
`,`Introduction & Installation`,`
`,`Data Import & Transformation`,`
`,`Data Visualization`,`
`,`Advanced Analytics with DAX`,`
`,`Publishing & Sharing Reports`]
  }

  return (
    <>
      <Container className="mx-auto p-4 my-5 bordered">
        <h3 className='text-center'>Training Courses</h3>
        <Row>
          <Col md={6} lg={3}>
            <div className="m-2">
              <Course course={cscp} image={CSCP}/>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="m-2">
              <Course course={sixSigmaBB} image={BB}/>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="m-2">
              <Course course={sixSigmaGB} image={GB}/>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="m-2">
              <Course course={sixSigmaYB} image={YB} />
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="m-2">
              <Course course={cpim} image={CPIM}/>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="m-2">
              <Course course={cips} image={CIPS}/>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="m-2">
              <Course course={cltd_course} image={CLTD}/>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="m-2">
              <Course course={data_analysis_course} image={DA}/>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TrendingCourses;