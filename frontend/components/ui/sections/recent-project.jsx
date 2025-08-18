"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { recentProjects2 } from "@/data/data";
import RecentProjectCard2 from "@/components/ui/cards/recent-project-card-2";

export default function RecentProject() {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        centerMode: true,
        centerPadding: "100px",
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "70px",
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
            <div className="section optech-section-padding bg-light1">
                <div className="container">
                    <div className="optech-section-title center">
                        <h2>Explore our recent projects</h2>
                    </div>
                </div>
                <Slider
                    {...settings}
                    className="optech-3column-slider"
                    data-aos="fade-up"
                    data-aos-duration={800}
                >
                    {/* recent project card start */}
                    {recentProjects2?.slice(0, 4).map((item, i) => (
                        <div key={i}>
                            <RecentProjectCard2 data={item} />
                        </div>
                    ))}
                    {/* recent project card end */}
                </Slider>
            </div>
        </>
    );
}
