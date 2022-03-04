import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

import slider1 from '../images/header-slider-img-01.jpg';
import slider2 from '../images/header-slider-img-02.jpg';
import slider3 from '../images/header-slider-img-03.jpg';


function Sliders(){

    var settings = {
      opacity: 0,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
        <Slider {...settings}>
              <div>
                <img src={slider1} alt="slider1" />
              </div>
              <div>
                <img src={slider2} alt="slider2" />
              </div>
              <div>
                <img src={slider3} alt="slider3" />
              </div>


              {/* This is not working yet */}
              <div class="detail">
                  <h2>We design and fabricate indestructible wastewater screens. Enough said.</h2>					
                  <a href="" class="view-products">VIEW PRODUCTS</a>
						      <a href="" class="view-services">VIEW SERVICES</a>
					    </div>                   
          </Slider>

    )
}
export default Sliders;