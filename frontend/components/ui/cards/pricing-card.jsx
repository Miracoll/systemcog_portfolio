import Link from "next/link";

export default function PricingCard({ data, index }) {
    return (
        <>
            <div
                className={`optech-pricing-wrap optech-pricing2 ${
                    index === 1 ? "active" : ""
                }`}
            >
                <div className="optech-pricing-header">
                    <h4>{data.plan}</h4>
                </div>
                <div className="optech-pricing-price">
                    <h2>
                        ${data.price}
                        <span>/{data.period}</span>
                    </h2>
                </div>
                <p>
                    Best for Startup business owners who needs website for
                    business.
                </p>
                <Link className="optech-pricing-btn" href="/pricing">
                    Select This Plan
                </Link>
                <div className="optech-pricing-feature">
                    <ul>
                        <li>
                            <i className="ri-check-line" />
                            10 GB disk space availability
                        </li>
                        <li>
                            <i className="ri-check-line" />
                            50 GB NVMe SSD for use
                        </li>
                        <li>
                            <i className="ri-check-line" />
                            Free platform access for all
                        </li>
                        <li>
                            <i className="ri-check-line" />
                            Free lifetime updates facility
                        </li>
                        <li>
                            <i className="ri-check-line" />
                            Free one year support
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
