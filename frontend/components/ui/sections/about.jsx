import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <>
            <div className="section large-padding-tb4 overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="optech-thumb extra-mr">
                                <Image
                                    height="0"
                                    width="0"
                                    sizes="100vw"
                                    priority
                                    data-aos="fade-up"
                                    data-aos-duration={600}
                                    src="/assets/images/v2/thumb1.png"
                                    alt="thumb"
                                    className="h-auto w-100"
                                />
                                <div
                                    className="optech-thumb-position"
                                    data-aos="fade-up"
                                    data-aos-duration={800}
                                >
                                    <Image
                                        height={341}
                                        width={303}
                                        priority
                                        src="/assets/images/v2/thumb2.png"
                                        alt="thumb"
                                    />
                                </div>
                                <div className="optech-shape1">
                                    <Image
                                        height={200}
                                        width={133}
                                        priority
                                        src="/assets/images/shape/shape1.svg"
                                        alt="shape"
                                    />
                                </div>
                                <div className="optech-shape2">
                                    <Image
                                        height={107}
                                        width={104}
                                        priority
                                        src="/assets/images/shape/shape2.svg"
                                        alt="shape"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="optech-default-content ml40">
                                <h2>
                                    Exclusive technology to provide IT solutions
                                </h2>
                                <p>
                                    Each demo built with Teba will look
                                    different. You can customize almost anything
                                    in the appearance of your website with only
                                    a few clicks. Each demo built with Teba will
                                    look different.
                                </p>
                                <div className="optech-icon-list">
                                    <ul>
                                        <li>
                                            <i className="ri-check-line" />
                                            Easily Build Custom Reports And
                                            Dashboards
                                        </li>
                                        <li>
                                            <i className="ri-check-line" />
                                            Legacy Software Modernization
                                        </li>
                                        <li>
                                            <i className="ri-check-line" />
                                            Software For The Open Enterprise
                                        </li>
                                    </ul>
                                </div>
                                <div className="optech-extra-mt">
                                    <Link
                                        className="optech-default-btn"
                                        href="/about"
                                        data-text="More About Us"
                                    >
                                        <span className="btn-wraper">
                                            More About Us
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
