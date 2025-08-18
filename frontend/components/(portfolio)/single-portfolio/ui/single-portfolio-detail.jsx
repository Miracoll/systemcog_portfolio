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

export default function SinglePortfolioDetail() {
    return (
        <>
            <div className="optech-pd-sidebar">
                <h5>Project Details</h5>
                <div className="optech-pd-sidebar-item">
                    <span>Client:</span>
                    <p>Porter Victoria</p>
                </div>
                <div className="optech-pd-sidebar-item">
                    <span>Category:</span>
                    <p>Web Development</p>
                </div>
                <div className="optech-pd-sidebar-item">
                    <span>Date:</span>
                    <p>20 January, 2023</p>
                </div>
                <div className="optech-pd-sidebar-item">
                    <span>Website:</span>
                    <Link href="mailto:name@email.com">example@gmail.com</Link>
                </div>
                <div className="optech-social-icon-box">
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
