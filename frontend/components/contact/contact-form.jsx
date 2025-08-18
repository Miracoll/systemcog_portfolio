import Link from "next/link";
import ContactFormCard from "./ui/contact-form-card";
export default function ContactForm() {
    return (
        <>
            <div className="section optech-section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="optech-default-content mr40">
                                <h2>
                                    Let&apos;s build an awesome project together
                                </h2>
                                <p>
                                    Each demo built with Teba will look
                                    different. You can customize almost anything
                                    in the appearance of your website with only
                                    a few clicks. Each demo built with Teba will
                                    look different.
                                </p>
                                <div className="optech-contact-info-column">
                                    <div className="optech-contact-info">
                                        <i className="ri-map-pin-2-fill" />
                                        <h5>Address</h5>
                                        <p>
                                            1791 Yorkshire Circle Kitty
                                            <br />
                                            Hawk, NC 279499
                                        </p>
                                    </div>
                                    <div className="optech-contact-info">
                                        <i className="ri-mail-fill" />
                                        <h5>Contact</h5>
                                        <Link href="mailto:name@email.com">
                                            info@example.com
                                        </Link>
                                        <Link href="tel:123">518-564-3200</Link>
                                    </div>
                                </div>
                                Office Hours: Mon – Sat: 8:00 AM – 10:00 PM
                            </div>
                        </div>
                        <div
                            className="col-lg-6"
                            data-aos="fade-up"
                            data-aos-duration={600}
                        >
                            {/* contact form start */}
                            <ContactFormCard />
                            {/* contact form end */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
