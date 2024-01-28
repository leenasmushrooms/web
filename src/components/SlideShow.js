import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

export default function SlideShow(props) {
  const {slides} = props;
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
        {slides.map(slide => <div><PreviewCompatibleImage imageInfo={slide.image}/></div>)}
      </Carousel>
    </div>
  );
}
