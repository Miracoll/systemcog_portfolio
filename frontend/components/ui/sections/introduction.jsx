import Image from "next/image";

export default function Introduction() {
    return (
        <>
            <div className="section large-padding-tb7 overflow-hidden bg-light1">
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
                                    src="/assets/images/v8/thumb1.png"
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
                                        src="/assets/images/v8/thumb2.png"
                                        alt="thumb"
                                        className="h-auto w-100"
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
                                    We provide perfect IT solutions &amp;
                                    technology
                                </h2>
                                <h5>
                                    During this time, we’ve built a reputation
                                    for excellent clients satisfaction as
                                    evidenced by our
                                </h5>
                                <p>
                                    Each demo built with Teba will look
                                    different. You can customize almost anything
                                    in the appearance of your website with only
                                    a few clicks. Each demo built with Teba will
                                    look different.
                                </p>
                                <div className="optech-extra-mt">
                                    <div className="optech-iconbox-column">
                                        <div className="optech-iconbox-wrap3">
                                            <div className="optech-iconbox-icon3">
                                                <Image
                                                    height={32}
                                                    width={32}
                                                    src="/assets/images/iconbox/icon11.svg"
                                                    alt="icon"
                                                />
                                            </div>
                                            <div className="optech-iconbox-data3">
                                                <p>
                                                    Provide Skills <br />
                                                    Services
                                                </p>
                                            </div>
                                        </div>
                                        <div className="optech-iconbox-wrap3">
                                            <div className="optech-iconbox-icon3">
                                                <Image
                                                    height={32}
                                                    width={32}
                                                    src="/assets/images/iconbox/icon12.svg"
                                                    alt="icon"
                                                />
                                            </div>
                                            <div className="optech-iconbox-data3">
                                                <p>
                                                    Urgent Support <br /> For
                                                    Clients
                                                </p>
                                            </div>
                                        </div>
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
