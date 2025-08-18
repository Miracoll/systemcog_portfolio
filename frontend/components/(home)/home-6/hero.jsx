"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";

// prev arrow
const PrevArrow = (props) => {
    const { onClick } = props;

    return (
        <button className="slide-arrow optech-hero-next" onClick={onClick}>
            <i className="ri-arrow-left-s-line"></i>
        </button>
    );
};

// next arrow
const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="slide-arrow optech-hero-prev" onClick={onClick}>
            <i className="ri-arrow-right-s-line"></i>
        </button>
    );
};

const heroInfo = [
    {
        bgImg: "/assets/images/hero/hero-bg3.png",
        title: "Affordable big IT & technology solutions",
        subTitle: "We provide professional IT services",
    },
    {
        bgImg: "/assets/images/hero/hero-bg2.png",
        title: "Software crafting for digital success",
        subTitle: "We provide professional IT services",
    },
];

export default function Hero() {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        speed: 800,
        lazyLoad: "progressive",
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <>
            <div className="optech-hero-section6">
                <Slider {...settings} className="optech-hero-slider">
                    {/* hero banner start */}
                    {heroInfo?.map((item, i) => (
                        <div key={i}>
                            <div
                                className="optech-hero-slider-item"
                                style={{
                                    backgroundImage: `url("${item.bgImg}")`,
                                }}
                            >
                                <div className="container">
                                    <div className="optech-hero-content center sm">
                                        <h5>{item.subTitle}</h5>
                                        <h1>{item.title}</h1>
                                        <div className="optech-extra-mt">
                                            <Link
                                                className="optech-default-btn"
                                                href="/contact"
                                                data-text="Work With Us"
                                            >
                                                <span className="btn-wraper">
                                                    Work With Us
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* hero banner end */}
                </Slider>
            </div>
        </>
    );
}
