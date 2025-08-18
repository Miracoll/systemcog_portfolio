import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <>
            <div
                className="optech-hero-section bg-cover"
                style={{ backgroundImage: "url(/assets/images/hero/bg1.png)" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="optech-hero-content">
                                <h5>We provide professional IT services</h5>
                                <h1>
                                    Delivering tech solutions for your startups
                                </h1>
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
                                            className="optech-default-btn optech-white-btn"
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
                        <div className="col-lg-5 offset-lg-1">
                            <div
                                className="optech-hero-thumb"
                                data-aos="fade-up"
                                data-aos-duration="800"
                            >
                                <Image
                                    height="0"
                                    width="0"
                                    sizes="100vw"
                                    priority
                                    src="/assets/images/hero/hero-thumb1.png"
                                    alt="hero"
                                    className="h-auto w-100"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
