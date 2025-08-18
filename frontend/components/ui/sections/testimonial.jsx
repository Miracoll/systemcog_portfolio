"use client";
import Slider from "react-slick";
import { testimonial1 } from "@/data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "../cards/testimonial-card";

// prev arrow
const PrevArrow = (props) => {
    const { onClick } = props;

    return (
        <button className="slide-arrow optech-t-next" onClick={onClick}>
            <i className="ri-arrow-left-s-line"></i>
        </button>
    );
};

// next arrow
const NextArrow = (props) => {
    const { onClick } = props;

    return (
        <button className="slide-arrow optech-t-prev" onClick={onClick}>
            <i className="ri-arrow-right-s-line"></i>
        </button>
    );
};

export default function Testimonial() {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        speed: 800,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <>
            <div className="section optech-section-padding dark-bg">
                <div className="container">
                    <Slider {...settings} className="optech-1column-slider">
                        {/* testimonial card start */}
                        {testimonial1?.map((item, i) => (
                            <div key={i}>
                                <TestimonialCard data={item} />
                            </div>
                        ))}
                        {/* testimonial card end */}
                    </Slider>
                </div>
            </div>
        </>
    );
}
