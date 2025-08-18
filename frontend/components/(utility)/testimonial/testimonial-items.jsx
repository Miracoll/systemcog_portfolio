import CustomerSayCard from "@/components/ui/cards/customer-say-card";
import { customerSay1 } from "@/data/data";

export default function TestimonialItems() {
    return (
        <>
            <div className="section optech-section-padding">
                <div className="container">
                    <div className="row g-4">
                        {/* testimonial card start */}
                        {customerSay1?.slice(0, 9).map((item, i) => (
                            <div
                                key={i}
                                className="col-xl-4 col-md-6"
                                data-aos="fade-up"
                                data-aos-duration={
                                    i % 3 === 0 ? 400 : i % 3 === 1 ? 600 : 800
                                }
                            >
                                <CustomerSayCard data={item} />
                            </div>
                        ))}
                        {/* testimonial card end */}
                    </div>
                </div>
            </div>
        </>
    );
}
