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

export default function Copyright4() {
    const date = new Date().getFullYear();

    return (
        <>
            <div className="optech-footer-bottom">
                <div className="row">
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className="optech-copywright dark-color">
                            <p>
                                Copyright © {date} Qubohub. All rights reserved.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="optech-social-icon-box right-align style-two">
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
                    </div>
                </div>
            </div>
        </>
    );
}
