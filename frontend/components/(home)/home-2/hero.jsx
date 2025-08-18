import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <>
            <div
                className="optech-hero-section2 bg-cover"
                style={{
                    backgroundImage: "url(assets/images/hero/hero-bg1.png)",
                }}
            >
                <div className="container">
                    <div className="optech-hero-content center">
                        <div className="optech-hero-power">
                            <Image
                                height="78"
                                width="52"
                                src="/assets/images/hero/power.svg"
                                alt="power"
                            />
                        </div>
                        <h1>The best innovative technology solutions</h1>
                        <p>
                            We transform businesses of most major sectors with
                            powerful and adaptable digital solutions that
                            satisfy the needs of today.
                        </p>
                        <div
                            className="optech-extra-mt"
                            data-aos="fade-up"
                            data-aos-duration={800}
                        >
                            <Link
                                className="optech-default-btn"
                                href="/contact"
                                data-text="Work With Us"
                            >
                                <span className="btn-wraper">Work With Us</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
