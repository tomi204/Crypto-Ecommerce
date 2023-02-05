import React from "react";
import Sdata from "./Sdata";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
const SlideCard = () => {
  //slider settings
  const settings = {
    arrows: false,
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,


  };
  //slider component
  return (
    <>

      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (

            <div className="box" key={index}>
              <img src={value.cover} alt="" className="img-home" />
            </div>

          );
        })}
      </Slider>
    </>
  );
};

export default SlideCard;
