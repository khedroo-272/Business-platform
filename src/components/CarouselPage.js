import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ThirdSlide from "../images/ThirdSlide.jpg";
import FirstSlide from "../images/FirstSlide.jpg";
import SecondSlide from "../images/SecondSlide.jpg";
import FourthSlide from "../images/FourthSlide.jpg";
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
        <img
          className="d-block w-100 full-height"
          src="https://res.cloudinary.com/dwucedjmy/image/upload/v1687722374/Tutor-Trek/09206fc2-d0f1-41f6-b714-36242be94ee7_zhgvax.jpg"
          alt="First slide"
        />
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
          <h2>Learn Anywhere</h2>
          <p>
            Access our courses from the comfort of your own home and learn at
            your own place.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="overlay"></div>
        <img className="d-block w-100" src={FourthSlide} alt="First slide" />
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
