import React from "react";
import Sdata from "./Sdata";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideCard = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <>
              <div className="box flex_slider_container top" key={index}>
                <div className="left">
                  <h1>{value.title}</h1>
                  <p>{value.desc}</p>
                  <button className="btn-primary">Mas Información</button>
                </div>
                <div className="right">
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
