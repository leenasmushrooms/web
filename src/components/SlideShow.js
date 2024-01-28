import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import one from "../img/leenas-mushroom-183.jpg";
import two from "../img/leenas-mushroom-18.jpg";
import three from "../img/leenas-mushroom-178.jpg";
import four from "../img/leenas-mushroom-198.jpg";
import five from "../img/leenas-mushroom-200.jpg";

export default function SlideShow(props) {
  return (
    <div className="content">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        stopOnHover
        swipeable
        showIndicators={false}
        interval={10000}
        animationHandler="fade"
      >
        <div>
          <img src={one} />
        </div>
        <div>
          <img src={two} />
        </div>
        <div>
          <img src={three} />
        </div>
        <div>
          <img src={four} />
        </div>
        <div>
          <img src={five} />
        </div>
      </Carousel>
    </div>
  );
}
