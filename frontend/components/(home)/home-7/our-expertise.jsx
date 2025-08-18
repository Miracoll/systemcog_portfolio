import Image from "next/image";
import ProgressBar2 from "./ui/progress-bar-2";

export default function OurExpertise() {
    return (
        <>
            <div className="section large-padding-tb2 overflow-hidden bg-light1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="optech-thumb extra-ml2 mr40">
                                <Image
                                    height="0"
                                    width="0"
                                    sizes="100vw"
                                    priority
                                    data-aos="fade-up"
                                    data-aos-duration={600}
                                    src="/assets/images/v1/thumb3.png"
                                    alt="thumb"
                                    className="h-auto w-100"
                                />
                                <div
                                    className="optech-thumb-position3 aos-init aos-animate"
                                    data-aos="fade-up"
                                    data-aos-duration={800}
                                >
                                    <Image
                                        height={347}
                                        width={337}
                                        priority
                                        src="/assets/images/v1/thumb4.png"
                                        alt="thumb"
                                        className="h-auto w-100"
                                    />
                                </div>
                                <div className="optech-shape3">
                                    <Image
                                        height={200}
                                        width={133}
                                        priority
                                        src="/assets/images/shape/shape3.svg"
                                        alt="thumb"
                                    />
                                </div>
                                <div className="optech-shape4">
                                    <Image
                                        height={107}
                                        width={104}
                                        priority
                                        src="/assets/images/shape/shape4.svg"
                                        alt="thumb"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="optech-default-content ml40">
                                <h2>
                                    Increasing business success with technology
                                </h2>
                                <p>
                                    Each demo built with Teba will look
                                    different. You can customize almost anything
                                    in the appearance of your website with only
                                    a few clicks. Each demo built with Teba will
                                    look different.
                                </p>
                                <div className="optech-extra-mt">
                                    <section id="first-sec" />
                                    <div className="optech-progress-item">
                                        <ProgressBar2
                                            name="IT Solution &amp; Management"
                                            percentage={86}
                                        />
                                    </div>
                                    <div className="optech-progress-item">
                                        <ProgressBar2
                                            name="Website &amp; App Development"
                                            percentage={72}
                                        />
                                    </div>
                                    <div className="optech-progress-item">
                                        <ProgressBar2
                                            name="SEO &amp; Digital Marketing"
                                            percentage={83}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="optech-divider color2" />
            </div>
        </>
    );
}
