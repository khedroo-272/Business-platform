import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import SecondSlide from "../images/SecondSlide.webp";
import FourthSlide from "../images/FourthSlide.webp";
import "../App.css"

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
      <Carousel.Item>
        <div className="overlay"></div>
        <img className="d-block w-100" src={FourthSlide} alt="First slide" />
        <Carousel.Caption className="caption-text">
          <h2>Welcome to Business platform</h2>
          <p>
          Enhance your knowledge and skills with our comprehensive courses
          taught by expert instructors.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="overlay"></div>
        <img className="d-block w-100" src={SecondSlide} alt="First slide" />
        <Carousel.Caption className="caption-text">
          <h2>Expand Your Knowledge</h2>
          <p>
            Discover new subjects and gain expertise in your area of interest.
            Our platform offers a wide range of courses to cater to your
            learning goals.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
