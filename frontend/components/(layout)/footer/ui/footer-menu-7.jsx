import {
    informationLinks,
    quickLinks,
    serviceLinks,
} from "@/data/footer-navigation";
import Link from "next/link";

export default function FooterMenu7() {
    return (
        <>
            <div className="col-xl-2 offset-xl-1 col-md-4">
                <div className="optech-footer-menu dark-color">
                    <div className="optech-footer-title dark-color">
                        <h5>Quick Links</h5>
                    </div>
                    <ul>
                        {/* quick links start */}
                        {quickLinks?.map((item, i) => (
                            <li key={i}>
                                <Link href={item.link}>{item.title}</Link>
                            </li>
                        ))}
                        {/* quick links end */}
                    </ul>
                </div>
            </div>
            <div className="col-xl-3 col-md-5">
                <div className="optech-footer-menu dark-color ml30">
                    <div className="optech-footer-title dark-color">
                        <h5>Services</h5>
                    </div>
                    <ul>
                        {/* services links start */}
                        {serviceLinks?.map((item, i) => (
                            <li key={i}>
                                <Link href={item.link}>{item.title}</Link>
                            </li>
                        ))}
                        {/* services links end */}
                    </ul>
                </div>
            </div>
            <div className="col-xl-2 col-md-3">
                <div className="optech-footer-menu dark-color mb-0">
                    <div className="optech-footer-title dark-color">
                        <h5>Information</h5>
                    </div>
                    <ul>
                        {/* information links start */}
                        {informationLinks?.map((item, i) => (
                            <li key={i}>
                                <Link href={item.link}>{item.title}</Link>
                            </li>
                        ))}
                        {/* information links end */}
                    </ul>
                </div>
            </div>
        </>
    );
}
