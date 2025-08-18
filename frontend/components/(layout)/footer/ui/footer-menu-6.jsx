import {
    informationLinks,
    quickLinks,
    serviceLinks,
} from "@/data/footer-navigation";
import Link from "next/link";

export default function FooterMenu6() {
    return (
        <>
            <div className="optech-footer-top optech-section-padding-bottom">
                <div className="row">
                    <div className="col-xl-2 col-lg-2 col-md-3">
                        <div className="optech-footer-menu optech-footer-menu dark-color">
                            <div className="optech-footer-title dark-color">
                                <h5>Quick Links</h5>
                            </div>
                            <ul>
                                {/* quick links start */}
                                {quickLinks?.map((item, i) => (
                                    <li key={i}>
                                        <Link href={item.link}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                                {/* quick links end */}
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-5">
                        <div className="optech-footer-menu optech-footer-menu dark-color ml30">
                            <div className="optech-footer-title dark-color">
                                <h5>Services</h5>
                            </div>
                            <ul>
                                {/* services links start */}
                                {serviceLinks?.map((item, i) => (
                                    <li key={i}>
                                        <Link href={item.link}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                                {/* services links end */}
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4">
                        <div className="optech-footer-menu optech-footer-menu dark-color">
                            <div className="optech-footer-title dark-color">
                                <h5>Information</h5>
                            </div>
                            <ul>
                                {/* information links start */}
                                {informationLinks?.map((item, i) => (
                                    <li key={i}>
                                        <Link href={item.link}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                                {/* information links end */}
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <div className="optech-subscription-column">
                            <div className="optech-footer-title dark-color">
                                <h5>Subscribe Our Newsletter</h5>
                                <p>
                                    Get ready to work together for the better
                                    solution for your business
                                </p>
                            </div>
                            <div className="optech-subscription">
                                <form>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        required
                                    />
                                    <button
                                        id="optech-subscription-btn"
                                        type="button"
                                        data-text="Subscribe"
                                    >
                                        <span className="btn-wraper">
                                            Subscribe
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
