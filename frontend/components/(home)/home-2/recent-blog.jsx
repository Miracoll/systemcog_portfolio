import Link from "next/link";
import { recentBlog2 } from "@/data/data";
import RecentBlogCard2 from "@/components/ui/cards/recent-blog-card-2";

export default function RecentBlog() {
    return (
        <>
            <div className="section optech-section-padding">
                <div className="container">
                    <div className="optech-section-title center">
                        <h2>Our recent blog &amp; articles</h2>
                    </div>
                    <div className="row">
                        {/* recent blog start */}
                        {recentBlog2?.slice(0, 3).map((item, i) => (
                            <div
                                key={i}
                                className="col-xl-4 col-md-6"
                                data-aos="fade-up"
                                data-aos-duration={500}
                            >
                                <div className="optech-blog-wrap2">
                                    <RecentBlogCard2 data={item} />
                                </div>
                            </div>
                        ))}
                        {/* recent blog end */}
                    </div>
                    <div className="optech-center-btn">
                        <Link
                            className="optech-default-btn"
                            href="/blog"
                            data-text="View All Posts"
                        >
                            <span className="btn-wraper">View All Posts</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
