import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slides() {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: true,
        autoplay: true,
    };
    return (
        <div>
            <Slider {...settings}>
                <img style={{ objectFit: 'cover' }} src={"src/assets/Imagem1.jpeg"} />
                <img style={{ objectFit: 'cover' }} src={"src/assets/Imagem2.jpeg"} />
                <img style={{ objectFit: 'cover' }} src={"src/assets/Imagem3.jpeg"} />
            </Slider>
        </div>
    );
}

export default Slides;