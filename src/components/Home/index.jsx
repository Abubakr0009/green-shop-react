import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import SwiperComponent from "../Swiper";

const HomeComponent = () => {
  return (
    <div>
      <Hero />
      <SwiperComponent/>
      <Categories />
    </div>
  );
};

export default HomeComponent;
