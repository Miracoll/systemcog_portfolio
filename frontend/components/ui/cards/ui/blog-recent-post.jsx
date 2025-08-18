import { recentBlog4 } from "@/data/data";
import BlogRcentCard from "./blog-rcent-card";

export default function BlogRecentPost() {
    return (
        <>
            <div className="optech-blog-widgets">
                <h5>Recent Posts</h5>

                {/* blog recent card start */}
                {recentBlog4?.map((item, i) => (
                    <BlogRcentCard key={i} data={item} />
                ))}
                {/* blog recent card end */}
            </div>
        </>
    );
}
