import Image from "next/image";
import { features2 } from "@/data/data";
import FeatureCard from "../cards/feature-card";

export default function Feature() {
    return (
        <>
            <div className="section large-padding-tb6 overflow-hidden bg-light1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-lg-2">
                            <div className="optech-thumb extra-ml">
                                <Image
                                    height="0"
                                    width="0"
                                    sizes="100vw"
                                    priority
                                    data-aos="fade-up"
                                    data-aos-duration={600}
                                    src="/assets/images/v3/thumb3.png"
                                    alt="thumb"
                                    className="h-auto w-100"
                                />
                                <div
                                    className="optech-thumb-position2"
                                    data-aos="fade-up"
                                    data-aos-duration={800}
                                >
                                    <Image
                                        height={347}
                                        width={337}
                                        priority
                                        src="/assets/images/v3/thumb4.png"
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
                                        alt="shape"
                                    />
                                </div>
                                <div className="optech-shape4">
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
                            <div className="optech-default-content mr40">
                                <h2>
                                    Providing IT solutions &amp; services for
                                    startups
                                </h2>
                                <div className="optech-extra-mt">
                                    {/* feature card start */}
                                    {features2?.map((item, i) => (
                                        <FeatureCard key={i} data={item} />
                                    ))}
                                    {/* feature card end */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
