import PortfolioCard from "@/components/ui/cards/portfolio-card";
import Pagination from "@/components/ui/sections/pagination";
import { portfolio2 } from "@/data/data";

export default function PortfolioMasonryItem() {
    return (
        <>
            <div className="section optech-section-padding">
                <div className="container">
                    <div className="optech-section-title center">
                        <h2>Explore our recent projects</h2>
                    </div>
                    <div className="row">
                        {/* portfolio card start */}
                        {portfolio2?.map((item, i) => (
                            <div
                                className={
                                    i === 4 || i === 5
                                        ? "col-xl-8"
                                        : "col-xl-4 col-md-6 "
                                }
                                data-aos="fade-up"
                                data-aos-duration={500 + (i % 3) * 200}
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
