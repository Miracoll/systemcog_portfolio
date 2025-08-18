"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { awesomeServices2 } from "@/data/data";
import AwesomeServiceCard from "@/components/ui/cards/awesome-service-card";

export default function AwesomeService() {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="section optech-section-padding bg-light1">
                <div className="container">
                    <div className="optech-section-title center">
                        <h2>Our awesome services to give you success</h2>
                    </div>

                    <Slider
                        {...settings}
                        className="optech-4column-slider2"
                        data-aos="fade-up"
                        data-aos-duration={800}
                    >
                        {/* awesome service card start */}
                        {awesomeServices2?.slice(0, 5).map((item, i) => (
                            <div key={i}>
                                <AwesomeServiceCard data={item} />
                            </div>
                        ))}
                        {/* awesome service card end */}
                    </Slider>
                </div>
            </div>
        </>
    );
}
