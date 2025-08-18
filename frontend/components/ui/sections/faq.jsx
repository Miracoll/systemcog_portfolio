"use client";
import Link from "next/link";
import { faq1 } from "@/data/data";
import { useState } from "react";
import FaqCollapse from "../cards/faq-collapse";

export default function Faq() {
    const [isCollapse, setIsCollapse] = useState(0);

    // collapse handler
    const handler = (index) => {
        if (isCollapse === index) {
            return setIsCollapse(null);
        }
        setIsCollapse(index);
    };

    return (
        <>
            <div className="section bg-light1 optech-section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="optech-default-content">
                                <h2>Have any questions? here some answers</h2>
                                <p>
                                    Each demo built with Teba will look
                                    different. You can customize almost anything
                                    in the appearance of your website with only
                                </p>
                                <div
                                    className="optech-extra-mt"
                                    data-aos="fade-up"
                                    data-aos-duration={800}
                                >
                                    <Link
                                        className="optech-default-btn"
                                        href="/faq"
                                        data-text="Ask Any Question"
                                    >
                                        <span className="btn-wraper">
                                            Ask Any Question
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="optech-accordion-wrap init-wrap">
                                {/* faq start */}
                                {faq1?.slice(0, 4).map((item, i) => (
                                    <FaqCollapse
                                        key={i}
                                        data={item}
                                        index={i}
                                        isCollapse={isCollapse}
                                        handler={handler}
                                    />
                                ))}
                                {/* faq end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
