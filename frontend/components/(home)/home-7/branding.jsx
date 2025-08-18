"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { branding1, branding2 } from "@/data/data";
import Image from "next/image";

export default function Branding() {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 6000,
        cssEase: "linear",
        pauseOnHover: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <>
            <div className="optech-brand-section2 bg-light1">
                <div className="container">
                    <div className="optech-brand-title dark-color">
                        <p>
                            Empowered professionals to connect with top-tier
                            opportunities
                        </p>
                    </div>
                    <Slider className="optech-brand-slider" {...settings}>
                        {/* bradning logo start */}
                        {branding2?.map((item, i) => (
                            <div key={i} className="optech-brand-item">
                                <Image
                                    height="0"
                                    width="0"
                                    sizes="100vw"
                                    priority
                                    src={item}
                                    alt="brand"
                                    className="h-100 w-auto"
                                />
                            </div>
                        ))}
                        {/* bradning logo end */}
                    </Slider>
                </div>
            </div>
        </>
    );
}
