import { blog2 } from "@/data/data";
import RecentBlogCard from "@/components/ui/cards/recent-blog-card";
import Pagination from "@/components/ui/sections/pagination";

export default function BlogGridItem() {
    return (
        <>
            <div className="section optech-section-padding optech-blog-grid">
                <div className="container">
                    <div className="row">
                        {/* recent blog start */}
                        {blog2?.slice(0, 9).map((item, i) => (
                            <div
                                key={i}
                                className="col-xl-4 col-md-6"
                                data-aos="fade-up"
                                data-aos-duration={
                                    i % 3 === 0 ? 600 : i % 3 === 1 ? 800 : 1000
                                }
                            >
                                <RecentBlogCard data={item} />
                            </div>
                        ))}
                        {/* recent blog end */}
                    </div>
                    {/* blog pagination start */}
                    <Pagination />
                    {/* blog pagination end */}
                </div>
            </div>
        </>
    );
}
