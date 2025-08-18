import Link from "next/link";
import React from "react";

export default function WorkTogether() {
    return (
        <>
            <div
                className="section bg-cover optech-section-padding"
                style={{
                    backgroundImage: "url(/assets/images/cta/cta-bg2.png)",
                }}
            >
                <div className="container">
                    <div className="optech-cta-wrap">
                        <div className="optech-cta-content center">
                            <h2>Let’s work together</h2>
                            <p>
                                Each demo built with Teba will look different.
                                You can customize anything appearance of your
                                website with only a few clicks
                            </p>
                            <div
                                className="optech-extra-mt"
                                data-aos="fade-up"
                                data-aos-duration={800}
                            >
                                <Link
                                    className="optech-default-btn"
                                    href="/contact"
                                    data-text="Let’s Start a Project"
                                >
                                    <span className="btn-wraper">
                                        Let’s Start a Project
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
