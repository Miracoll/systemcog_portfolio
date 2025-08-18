"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { customerSay1 } from "@/data/data";
import CustomerSayCard from "@/components/ui/cards/customer-say-card";

export default function CustomerSay() {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1299,
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
            <div className="section optech-section-padding">
                <div className="container">
                    <div className="optech-section-title center">
                        <h2>Don’t take our word, see what our customers say</h2>
                    </div>

                    <Slider
                        {...settings}
                        className="optech-3column-slider2"
                        data-aos="fade-up"
                        data-aos-duration={800}
                    >
                        {/* customer card start */}
                        {customerSay1?.slice(0, 4).map((item, i) => (
                            <div key={i}>
                                <CustomerSayCard data={item} />
                            </div>
                        ))}
                        {/* customer card end */}
                    </Slider>
                </div>
            </div>
        </>
    );
}
