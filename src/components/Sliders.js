import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/styles.scss";
import React from "react";
import Slider from "react-slick";


function Sliders(){

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
      };

    return(
      <>
      <Slider {...settings}>
          <div className="slider" id="slider1">
            <h2 className="slider-label">WE DESIGN AND FABRICATE INDESTRUCTIBLE WASTEWATER SCREENS. ENOUGH SAID.</h2>
            <button className="slider-btn">VIEW PRODUCTS</button>
            <button className="slider-btn">VIEW SERVICES</button>
          </div>
          <div className="slider" id="slider2">
            <h2 className="slider-label">WE DESIGN AND FABRICATE INDESTRUCTIBLE WASTEWATER SCREENS. ENOUGH SAID.</h2>
            <button className="slider-btn">VIEW PRODUCTS</button>
            <button className="slider-btn">VIEW SERVICES</button>
          </div>
          <div className="slider" id="slider3">
            <h2 className="slider-label">WE DESIGN AND FABRICATE INDESTRUCTIBLE WASTEWATER SCREENS. ENOUGH SAID.</h2>
            <button className="slider-btn" href="#">VIEW PRODUCTS</button>
            <button className="slider-btn" href="#">VIEW SERVICES</button>
          </div>
        </Slider></>

    )
}
export default Sliders;