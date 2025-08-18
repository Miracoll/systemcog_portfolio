import Link from "next/link";

export default function FaqQuestion() {
    return (
        <>
            <div className="section optech-section-padding-bottom">
                <div className="container">
                    <div className="optech-default-content sm-mw">
                        <h2>Still have questions?</h2>
                        <p>
                            Each demo built with Teba will look different. You
                            can customize almost anything in the appearance of
                            your website with only
                        </p>
                        <div
                            className="optech-extra-mt"
                            data-aos="fade-up"
                            data-aos-duration={800}
                        >
                            <Link
                                className="optech-default-btn optech-light-btn"
                                data-text="Ask Any Question"
                                href="/contact"
                            >
                                <span className="btn-wraper">
                                    Ask Any Question
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
