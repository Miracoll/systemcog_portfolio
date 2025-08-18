"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { teamExpert1 } from "@/data/data";
import ExpertTeamCard from "@/components/ui/cards/expert-team-card";

export default function ExpertTeam2() {
    const setting = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        centerMode: true,
        centerPadding: "300px",
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    centerPadding: "250px",
                },
            },
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 3,
                    centerPadding: "150px",
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    centerPadding: "100px",
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "100px",
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "100px",
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "0px",
                },
            },
        ],
    };

    return (
        <>
            <div className="section optech-section-padding">
                <div className="container">
                    <div className="optech-section-title center">
                        <h2>Our expert team is always ready to help you</h2>
                    </div>
                </div>

                <Slider
                    {...setting}
                    className="optech-4column-slider"
                    data-aos="fade-up"
                    data-aos-duration={800}
                >
                    {/* team card start */}
                    {teamExpert1?.slice(0, 4).map((item, i) => (
                        <div
                            key={i}
                            className="col-xl-3 col-md-6"
                            data-aos="fade-up"
                        >
                            <ExpertTeamCard data={item} />
                        </div>
                    ))}
                    {/* team card end */}
                </Slider>
            </div>
        </>
    );
}
