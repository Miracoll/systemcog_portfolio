import { pricing1 } from "@/data/data";
import PricingCard from "../cards/pricing-card";

export default function Pricing() {
    return (
        <>
            <div className="section optech-section-padding2 dark-bg optech-pricing">
                <div className="container">
                    <div className="optech-section-title center light-color">
                        <h2>Effective &amp; flexible pricing</h2>
                    </div>
                    <div className="row">
                        {/* pricing card start */}
                        {pricing1?.slice(0, 3).map((item, i) => (
                            <div
                                key={i}
                                className="col-xl-4 col-md-6"
                                data-aos="fade-up"
                                data-aos-duration={500 + i * 200}
                            >
                                <PricingCard data={item} index={i} />
                            </div>
                        ))}
                        {/* pricing card end */}
                    </div>
                </div>
            </div>
        </>
    );
}
