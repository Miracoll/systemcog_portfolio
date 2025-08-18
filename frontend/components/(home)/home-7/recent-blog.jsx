import { recentBlog3 } from "@/data/data";
import RecentBlogCard from "./ui/recent-blog-card";
import RecentBlogBigCard from "./ui/recent-blog-big-card";

export default function RecentBlog() {
    return (
        <>
            <div className="section optech-section-padding2">
                <div className="container">
                    <div className="optech-section-title center">
                        <h2>Our recent blog &amp; articles</h2>
                    </div>
                    <div className="row">
                        <div
                            className="col-xl-6"
                            data-aos="fade-up"
                            data-aos-duration={600}
                        >
                            <RecentBlogBigCard />
                        </div>
                        <div
                            className="col-xl-6"
                            data-aos="fade-left"
                            data-aos-duration={800}
                        >
                            {/* recent blog list start */}
                            {recentBlog3?.map((item, i) => (
                                <RecentBlogCard key={i} data={item} />
                            ))}
                            {/* recent blog list end */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
