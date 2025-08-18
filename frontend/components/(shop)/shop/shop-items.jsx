import { shop } from "@/data/data";
import Pagination from "@/components/ui/sections/pagination";
import ShopCard from "@/components/ui/cards/shop-card";

export default function ShopItems() {
    return (
        <>
            <div className="section optech-section-padding">
                <div className="container">
                    <div className="row">
                        {/* shop card start */}
                        {shop?.map((item, i) => (
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
                    {/* pagination start */}
                    <Pagination />
                    {/* pagination end */}
                </div>
            </div>
        </>
    );
}
