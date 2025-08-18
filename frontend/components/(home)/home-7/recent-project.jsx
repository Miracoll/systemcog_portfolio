"use client";
import { recentProjects2 } from "@/data/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecentProjectCard3 from "@/components/ui/cards/recent-project-card-3";

export default function RecentProject() {
    // setting for the slider
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
                        <h2>Explore our recent projects</h2>
                    </div>
                    <div>
                        {/* recent project slider start */}
                        <Slider
                            {...settings}
                            className="optech-3column-slider2"
                            data-aos="fade-up"
                            data-aos-duration={800}
                        >
                            {recentProjects2?.map((item, i) => (
                                <div key={i}>
                                    <RecentProjectCard3 data={item} />
                                </div>
                            ))}
                        </Slider>
                        {/* recent project slider end */}
                    </div>
                </div>
            </div>
        </>
    );
}
