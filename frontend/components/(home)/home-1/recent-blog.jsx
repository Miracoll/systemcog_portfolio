import Link from "next/link";
import { recentBlog1 } from "@/data/data";
import RecentBlogCard from "@/components/ui/cards/recent-blog-card";

export default function RecentBlog() {
    return (
        <>
            <div className="section optech-section-padding2">
                <div className="container">
                    <div className="optech-section-title">
                        <div className="row">
                            <div className="col-xxl-5 col-lg-7">
                                <h2>
                                    Recent blog &amp; articles about technology
                                </h2>
                            </div>
                            <div className="col-xxl-7 col-lg-5 d-flex align-items-center justify-content-end">
                                <div className="optech-title-btn">
                                    <Link
                                        className="optech-default-btn"
                                        href="/blog"
                                        data-text="View All Posts"
                                    >
                                        <span className="btn-wraper">
                                            View All Posts
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* recent blog start */}
                        {recentBlog1?.slice(0, 3).map((item, i) => (
                            <div
                                key={i}
                                className="col-xl-4 col-md-6"
                                data-aos="fade-up"
                                data-aos-duration={400 + i * 200}
                            >
                                <RecentBlogCard data={item} />
                            </div>
                        ))}
                        {/* recent blog end */}
                    </div>
                </div>
            </div>
        </>
    );
}
