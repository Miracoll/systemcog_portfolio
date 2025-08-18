import Link from "next/link";

export default function Hero() {
    return (
        <>
            <div
                className="optech-hero-section8 bg-cover"
                style={{ backgroundImage: "url(/assets/images/hero/bg4.png)" }}
            >
                <div className="container">
                    <div className="optech-hero-content center medium">
                        <h1>
                            We provide best tech solutions for your business
                        </h1>
                        <p>
                            We are architects of innovation, trailblazers of
                            technological advancement, and partners in your
                            success. As a dynamic and forward-thinking
                            organization
                        </p>
                        <div className="optech-extra-mt">
                            <div className="optech-btn-wrap center">
                                <Link
                                    className="optech-default-btn"
                                    data-aos-duration={600}
                                    data-aos="fade-up"
                                    data-text="Work With Us"
                                    href="/contact"
                                >
                                    <span className="btn-wraper">
                                        Work With Us
                                    </span>
                                </Link>
                                <Link
                                    className="optech-default-btn optech-white-btn"
                                    data-aos-duration={800}
                                    data-aos="fade-up"
                                    data-text="View Services"
                                    href="/service"
                                >
                                    <span className="btn-wraper">
                                        View Services
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
