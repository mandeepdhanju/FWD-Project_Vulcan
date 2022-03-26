import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/styles.scss";
import React from "react";
import Slider from "react-slick";

import slider1 from '../images/header-slider-img-01.jpg';
import slider2 from '../images/header-slider-img-02.jpg';
import slider3 from '../images/header-slider-img-03.jpg';


function Sliders(){

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };

    return(
      <>
      <Slider {...settings}>
          <div className="slider" >
            <img src={slider1} alt="slider2" />
            <h2 className="slider-label">WE DESIGN AND FABRICATE INDESTRUCTIBLE WASTEWATER SCREENS. ENOUGH SAID.</h2>
            <button className="slider-btn">VIEW PRODUCTS</button>
            <button className="slider-btn">VIEW SERVICES</button>
          </div>
          <div className="slider">
            <img src={slider2} alt="slider2" />
            <h2 className="slider-label">WE DESIGN AND FABRICATE INDESTRUCTIBLE WASTEWATER SCREENS. ENOUGH SAID.</h2>
            <button className="slider-btn">VIEW PRODUCTS</button>
            <button className="slider-btn">VIEW SERVICES</button>
          </div>
          <div className="slider">
            <img src={slider3} alt="slider3" />
            <h2 className="slider-label">WE DESIGN AND FABRICATE INDESTRUCTIBLE WASTEWATER SCREENS. ENOUGH SAID.</h2>
            <button className="slider-btn">VIEW PRODUCTS</button>
            <button className="slider-btn">VIEW SERVICES</button>
          </div>
        </Slider></>

    )
}
export default Sliders;