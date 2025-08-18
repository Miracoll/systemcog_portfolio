import ShopCard from "@/components/ui/cards/shop-card";
import { shop } from "@/data/data";

export default function ShopRelatedProduct() {
    return (
        <>
            <div className="optech-related-product-section">
                <div className="container">
                    <div className="optech-section-title center">
                        <h2>Related products</h2>
                    </div>
                    <div className="row">
                        {/* shop card start */}
                        {shop?.slice(0, 4).map((item, i) => (
                            <div
                                key={i}
                                className="col-xl-3 col-lg-4 col-md-6"
                                data-aos="fade-up"
                                data-aos-duration={
                                    i % 4 === 0
                                        ? "400"
                                        : i % 4 === 1
                                        ? "600"
                                        : i % 4 === 2
                                        ? "800"
                                        : "1000"
                                }
                            >
                                <ShopCard data={item} />
                            </div>
                        ))}
                        {/* shop card end */}
                    </div>
                </div>
            </div>
        </>
    );
}
