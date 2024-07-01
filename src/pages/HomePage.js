// pages/HomePage.js
import React from "react";
import ControlledCarousel from "../components/CarouselPage";
import TrendingCourses from "../components/TrendingCourses";
import Partners from "../components/Partners";

const HomePage = () => {
  return (
    <div>
      <>
        <ControlledCarousel />
        <Partners />
        <TrendingCourses />
      </>
    </div>
  );
};

export default HomePage;
