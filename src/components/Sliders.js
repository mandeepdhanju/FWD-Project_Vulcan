import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/styles.scss";
import React from "react";
import Slider from "react-slick";
import Waves from '../images//waves.png';

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
      <div className="hero-slider">
      <Slider {...settings}>
        <div className="slider" id="slider1">
          <h2 className="slider-label">WE DESIGN BLINDS,SCREENS AND PATIO DOOR.</h2>
          <button className="slider-btn">VIEW PRODUCTS</button>
          <button className="slider-btn">VIEW SERVICES</button>
        </div>
        <div className="slider" id="slider2">
          <h2 className="slider-label">WE DESIGN BLINDS,SCREENS AND PATIO DOOR.</h2>
          <button className="slider-btn">VIEW PRODUCTS</button>
          <button className="slider-btn">VIEW SERVICES</button>
        </div>
        <div className="slider" id="slider3">
          <h2 className="slider-label">WE DESIGN BLINDS,SCREENS AND PATIO DOOR.</h2>
          <button className="slider-btn" href="#">VIEW PRODUCTS</button>
          <button className="slider-btn" href="#">VIEW SERVICES</button>
        </div>
    </Slider>
    <img src={Waves} alt="" className="waves-divider"/>
    </div>

    )
}
export default Sliders;