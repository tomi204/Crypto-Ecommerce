import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Sdata from './Sdata';
const Marcas = () => {
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

    return (
        
    )
}

export default Marcas