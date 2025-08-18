"use client";
import AwesomeServiceCard2 from "@/components/ui/cards/awesome-service-card-2";
import { awesomeServices1 } from "@/data/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
            <div className="sectin bg-light1 optech-section-padding">
                <div className="container">
                    <div className="optech-section-title center">
                        <h2>Our awesome services to give you success</h2>
                    </div>
                    <Slider
                        className="optech-4column-slider2"
                        data-aos="fade-up"
                        data-aos-duration={800}
                        {...settings}
                    >
                        {/* awsome service card start */}
                        {awesomeServices1?.slice(0, 6).map((item, i) => (
                            <div key={i}>
                                <AwesomeServiceCard2 data={item} />
                            </div>
                        ))}
                        {/* awsome service card end */}
                    </Slider>
                </div>
            </div>
        </>
    );
}
