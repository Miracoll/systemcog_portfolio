import Link from "next/link";
import HeroForm from "./ui/hero-form";

export default function Hero() {
    return (
        <>
            <div
                className="optech-hero-section5"
                style={{
                    backgroundImage: "url(/assets/images/hero/hero-bg2.png)",
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7 d-flex align-items-center">
                            <div className="optech-hero-content white-color sm">
                                <h1>
                                    Optimize your enterprise with our leading
                                    guidance
                                </h1>
                                <p>
                                    We transform businesses of most major
                                    sectors with powerful and adaptable digital
                                    solutions that satisfy the needs of today.
                                </p>
                                <div
                                    className="optech-extra-mt"
                                    data-aos="fade-up"
                                    data-aos-duration={600}
                                >
                                    <Link
                                        className="optech-default-btn optech-white-btn"
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
                        <div
                            className="col-xl-4 col-lg-5"
                            data-aos="fade-up"
                            data-aos-duration={800}
                        >
                            {/* hero form start */}
                            <HeroForm />
                            {/* hero form end */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
