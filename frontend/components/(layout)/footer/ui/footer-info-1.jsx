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

export default function FooterInfo1() {
    return (
        <>
            <div className="optech-footer-textarea dark-color">
                <Link href="/">
                    <Image
                        height={36}
                        width={150}
                        priority
                        src="/assets/images/logo/logo-dark.svg"
                        alt="logo"
                    />
                </Link>
                <p>
                    Each demo built with Teba will look different. You can
                    customize almost anything in the appearance of your website
                    with only a few
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
            </div>
        </>
    );
}
