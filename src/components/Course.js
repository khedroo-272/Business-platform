import React from "react";
import {Card, Button} from "react-bootstrap";

function Course ({name, description, image, hours}) {
    return (
        <Card className="no-border" style={{ width: '100%' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className='title'>{name} {description}</Card.Title>
          <Card.Text>
          {hours} + Hours
          </Card.Text>
          <div className='w-100 d-flex justify-content-center'>
            <Button variant="primary" href="/about" target="_blank" rel="noopener noreferrer" className='centered pro-button'>
                Learn More
            </Button>
          </div>
        </Card.Body>
      </Card>
    )
}

export default Course;