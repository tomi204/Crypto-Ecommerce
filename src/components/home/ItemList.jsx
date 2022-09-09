import React from "react";
import Sdata from "./Sdata";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const SlideCard = () => {
  //slider settings
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul className="ul-mainS" style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  //slider component
  return (
    <>

      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <>
              <div className="box" key={index}>
                <div className="left">
                  <h1>{value.title}</h1>
                  <p className="descripcion-slider">{value.desc}</p>
                  <img src={value.cover} alt="" className="img-home" />
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default SlideCard;
