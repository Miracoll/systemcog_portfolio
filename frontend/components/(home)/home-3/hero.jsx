import Image from "next/image";
import Link from "next/link";
import HeroBranding from "./ui/hero-branding";

export default function Hero() {
    return (
        <>
            <div
                className="optech-hero-section3 bg-cover"
                style={{ backgroundImage: "url(/assets/images/hero/bg2.png)" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="optech-hero-content">
                                <h1>
                                    Delivering tech solutions for your startups
                                </h1>
                            </div>
                        </div>
                        <div
                            className="col-lg-5 offset-lg-1 d-flex align-items-center"
                            data-aos="fade-up"
                            data-aos-duration={600}
                        >
                            <div className="optech-hero-content">
                                <p>
                                    We transform businesses of most major
                                    sectors with powerful and adaptable digital
                                    solutions that satisfy the needs of today.
                                </p>
                                <div className="optech-extra-mt">
                                    <div className="optech-btn-wrap">
                                        <Link
                                            className="optech-default-btn"
                                            data-text="Work With Us"
                                            href="/contact"
                                        >
                                            <span className="btn-wraper">
                                                Work With Us
                                            </span>
                                        </Link>
                                        <Link
                                            className="optech-default-btn optech-white-btn"
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
                    <div
                        className="optech-hero-thumb3"
                        data-aos="fade-up"
                        data-aos-duration={800}
                    >
                        <Image
                            height="0"
                            width="0"
                            sizes="100vw"
                            priority
                            src="/assets/images/hero/hero-thumb2.png"
                            alt="hero"
                            className="h-auto w-100"
                        />
                    </div>
                    {/* hero branding start */}
                    <HeroBranding />
                    {/* hero branding end */}
                </div>
            </div>
        </>
    );
}
