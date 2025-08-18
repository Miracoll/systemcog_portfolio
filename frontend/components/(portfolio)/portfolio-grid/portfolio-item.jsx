import PortfolioCard from "@/components/ui/cards/portfolio-card";
import Pagination from "@/components/ui/sections/pagination";
import { portfolio1 } from "@/data/data";

export default function PortfolioItem() {
    return (
        <>
            <div className="section optech-section-padding">
                <div className="container">
                    <div className="row">
                        {/* portfolio card start */}
                        {portfolio1?.map((item, i) => (
                            <div
                                className="col-xl-4 col-md-6"
                                data-aos="fade-up"
                                data-aos-duration={
                                    i % 3 === 0 ? 500 : i % 3 === 1 ? 700 : 900
                                }
                                key={i}
                            >
                                <PortfolioCard data={item} />
                            </div>
                        ))}
                        {/* portfolio card end */}
                    </div>
                    {/* pagination start */}
                    <Pagination />
                    {/* pagination end */}
                </div>
            </div>
        </>
    );
}
