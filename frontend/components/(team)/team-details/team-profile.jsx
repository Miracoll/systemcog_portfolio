import Image from "next/image";
import Link from "next/link";
import TeamForm from "./ui/team-form";

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

export default function TeamProfile() {
    return (
        <>
            <div className="section optech-section-padding">
                <div className="container">
                    <div className="optech-team-single-wrap">
                        <div className="row">
                            <div className="col-lg-5">
                                <div
                                    className="optech-team-single-thumb"
                                    data-aos="fade-up"
                                    data-aos-duration={800}
                                >
                                    <Image
                                        height="0"
                                        width="0"
                                        sizes="100vw"
                                        src="/assets/images/team/team-details.png"
                                        alt="team-details"
                                        className="h-auto w-100"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 offset-lg-1">
                                <div className="optech-team-single-content">
                                    <h2>Sophia Rodriguez</h2>
                                    <span>CEO &amp; Founder</span>
                                    <p>
                                        A content management system helps you
                                        create, manage, and publish content on
                                        the web. It also keep content organized
                                        and accessible so it can be used and
                                        repurposed effectively.
                                    </p>
                                    <div className="optech-footer-info dark-color">
                                        <ul>
                                            <li>
                                                <Link href="tel:123">
                                                    <i className="ri-phone-fill" />
                                                    518-564-3200
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="mailto:name@email.com">
                                                    <i className="ri-mail-fill" />
                                                    qubohub@example.com
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="optech-extra-mt">
                                        <div className="optech-social-icon-box style-two">
                                            <ul>
                                                {/* social start */}
                                                {social?.map((item, i) => (
                                                    <li key={i}>
                                                        <Link href={item.link}>
                                                            <i
                                                                className={
                                                                    item.icon
                                                                }
                                                            />
                                                        </Link>
                                                    </li>
                                                ))}
                                                {/* social end */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* team form start */}
                                <TeamForm />
                                {/* team form end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
