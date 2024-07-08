import React from "react";
import {Card} from "react-bootstrap";

function Course ({course, image}) {
    return (
        <Card className="no-border course" style={{ width: '100%' }}>
          <div className='image-holder'>
            <Card.Img variant="top" src={image} alt='course image' />
          </div>
        <Card.Body>
          <Card.Title className='title'>{course.name} {course.description}</Card.Title>
          <Card.Text className="d-flex justify-content-between">
          <h7>Course outline</h7>
          <span className="hours">{course.hours}</span>
          </Card.Text>
          <div className="modules">
            {
              course.modules.map((module, index) => (
                <div  key={index}>{ module }</div>
              ))
            }
          </div>
        </Card.Body>
      </Card>
    )
}

export default Course;