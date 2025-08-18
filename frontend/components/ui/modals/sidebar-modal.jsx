"use client";
import useToggle from "@/hooks/zustand/useToggle";
import Image from "next/image";
import Link from "next/link";

const social = [
    {
        icon: "ri-facebook-fill",
        link: "https://www.facebook.com/",
    },
    {
        icon: "ri-linkedin-fill",
        link: "https://www.linkedin.com/",
    },
    {
        icon: "ri-twitter-fill",
        link: "https://twitter.com/",
    },
    {
        icon: "ri-instagram-fill",
        link: "https://www.instagram.com/",
    },
];

export default function SidebarModal() {
    const { isSidebarOpen, setSidebarOpen } = useToggle();

    return (
        <>
            <div className="optech-sidemenu-wraper">
                <div
                    className={`optech-sidemenu-column ${
                        isSidebarOpen ? "active" : ""
                    }`}
                >
                    <div className="optech-sidemenu-body">
                        <div className="optech-sidemenu-logo">
                            <Link href="/home-4">
                                <Image
                                    height={36}
                                    width={150}
                                    priority
                                    src="/assets/images/logo/logo-dark.svg"
                                    alt="logo"
                                />
                            </Link>
                        </div>
                        <p>
                            Vast numbers of employees now work remotely, and
                            it&rsquo;s too late to develop a set of remote-work
                            policies if you didn&rsquo;t already have one.
                        </p>
                        <div className="optech-social-icon-box style-two">
                            <ul>
                                {social?.map((item, i) => (
                                    <li key={i}>
                                        <Link href={item.link}>
                                            <i className={item.icon} />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="optech-sidemenu-thumb">
                            <Image
                                height="0"
                                width="0"
                                sizes="100vw"
                                src="/assets/images/hero/hero-bg1.png"
                                alt="hero"
                            />
                        </div>
                        <div className="optech-contact-info-wrap">
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
                    </div>
                    <span
                        onClick={() => setSidebarOpen(false)}
                        className="optech-sidemenu-close"
                    >
                        <i className="ri-close-line" />
                    </span>
                </div>
                <div
                    onClick={() => setSidebarOpen(false)}
                    className={`offcanvas-overlay ${
                        isSidebarOpen ? "active" : ""
                    } `}
                />
            </div>
        </>
    );
}
