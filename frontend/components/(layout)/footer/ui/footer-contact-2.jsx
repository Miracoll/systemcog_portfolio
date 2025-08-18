import Link from "next/link";

export default function FooterContact2() {
    return (
        <>
            <div className="optech-infobox-wrap extra-padding">
                <div className="row">
                    <div
                        className="col-xl-4 col-md-6"
                        data-aos="fade-up"
                        data-aos-duration={500}
                    >
                        <Link href="tel:123">
                            <div className="optech-infobox-item light-color">
                                <div className="optech-infobox-icon">
                                    <i className="ri-phone-fill" />
                                </div>
                                <div className="optech-infobox-data">
                                    <p>Call anytime</p>
                                    <h5>518-564-3200</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div
                        className="col-xl-4 col-md-6"
                        data-aos="fade-up"
                        data-aos-duration={700}
                    >
                        <Link href="mailto:name@email.com">
                            <div className="optech-infobox-item light-color">
                                <div className="optech-infobox-icon">
                                    <i className="ri-mail-fill" />
                                </div>
                                <div className="optech-infobox-data">
                                    <p>Email address</p>
                                    <h5>tachup@example.com</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div
                        className="col-xl-4 col-md-6"
                        data-aos="fade-up"
                        data-aos-duration={900}
                    >
                        <div className="optech-infobox-item light-color">
                            <div className="optech-infobox-icon">
                                <i className="ri-time-fill" />
                            </div>
                            <div className="optech-infobox-data">
                                <p>Office Hours</p>
                                <h5>8:00 AM – 10:00 PM</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
