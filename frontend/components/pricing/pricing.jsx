import { pricing1 } from "@/data/data";
import PricingCard2 from "../ui/cards/pricing-card-2";

export default function Pricing() {
    return (
        <>
            <div className="section optech-section-padding2">
                <div className="container">
                    <div className="row">
                        {/* pricing card start */}
                        {pricing1?.slice(0, 3).map((item, i) => (
                            <div
                                key={i}
                                className="col-xl-4 col-md-6"
                                data-aos="fade-up"
                                data-aos-duration={500 + i * 200}
                            >
                                <PricingCard2 data={item} index={i} />
                            </div>
                        ))}
                        {/* pricing card end */}
                    </div>
                </div>
            </div>
        </>
    );
}
