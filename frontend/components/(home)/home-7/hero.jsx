import Link from "next/link";

export default function Hero() {
    return (
        <>
            <div
                className="optech-hero-section7 bg-cover"
                style={{
                    backgroundImage: "url(/assets/images/hero/hero-bg4.png)",
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 d-flex align-items-center">
                            <div className="optech-hero-content dark-color sm">
                                <h5>We provide professional IT services</h5>
                                <h1>Software crafting for digital success</h1>
                                <p>
                                    We transform businesses of most major
                                    sectors with powerful and adaptable digital
                                    solutions that satisfy the needs of today.
                                </p>
                                <div className="optech-extra-mt">
                                    <div className="optech-btn-wrap">
                                        <Link
                                            className="optech-default-btn"
                                            data-aos="fade-up"
                                            data-aos-duration={600}
                                            href="/contact"
                                            data-text="Work With Us"
                                        >
                                            <span className="btn-wraper">
                                                Work With Us
                                            </span>
                                        </Link>
                                        <Link
                                            className="optech-default-btn optech-light-btn"
                                            data-aos="fade-up"
                                            data-aos-duration={800}
                                            href="/service"
                                            data-text="View Services"
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
                </div>
            </div>
        </>
    );
}
