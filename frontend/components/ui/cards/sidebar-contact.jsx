import Image from "next/image";
import Link from "next/link";

export default function SidebarContact() {
    return (
        <>
            <div
                className="optech-service-contact"
                data-aos="fade-up"
                data-aos-duration={800}
                style={{
                    backgroundImage: "url(/assets/images/service/bg.png)",
                }}
            >
                <div className="optech-service-contact-icon">
                    <Image
                        height={49}
                        width={49}
                        priority
                        src="/assets/images/service/icon.svg"
                        alt="icon"
                    />
                </div>
                <h3>Don&apos;t hesitate to contact us</h3>
                <p>
                    At our IT solution company, we are committed to exceptional
                </p>
                <Link
                    className="optech-default-btn"
                    data-text="Get in Touch"
                    href="/contact"
                >
                    <span className="btn-wraper">Get in Touch</span>
                </Link>
            </div>
        </>
    );
}
