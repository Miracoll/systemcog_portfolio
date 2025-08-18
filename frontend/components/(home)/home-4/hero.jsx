import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <>
            <div
                className="optech-hero-section4 bg-cover"
                style={{ backgroundImage: "url(assets/images/hero/bg3.png)" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="optech-hero-content dark-color">
                                <h5>We provide professional IT services</h5>
                                <h1>Best IT services for your agency</h1>
                                <p>
                                    We transform businesses of most major
                                    sectors with powerful and adaptable digital
                                    solutions that satisfy the needs of today.
                                </p>
                                <div className="optech-extra-mt">
                                    <div className="optech-btn-wrap">
                                        <Link
                                            className="optech-default-btn"
                                            href="/contact"
                                            data-text="Work With Us"
                                        >
                                            <span className="btn-wraper">
                                                Work With Us
                                            </span>
                                        </Link>
                                        <Link
                                            className="optech-default-btn optech-light-btn"
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
                        <div
                            className="col-lg-6"
                            data-aos="fade-up"
                            data-aos-duration={800}
                        >
                            <div className="optech-hero-thumb">
                                <Image
                                    height="0"
                                    width="0"
                                    sizes="100vh"
                                    src="/assets/images/hero/hero-thumb3.png"
                                    alt="thumb"
                                    className="h-100 w-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
