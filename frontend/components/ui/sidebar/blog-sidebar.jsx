import BlogCategory from "@/components/ui/cards/ui/blog-category";
import BlogRecentPost from "@/components/ui/cards/ui/blog-recent-post";
import BlogSearch from "@/components/ui/cards/ui/blog-search";
import BlogTag from "@/components/ui/cards/ui/blog-tag";

export default function BlogSidebar() {
    return (
        <>
            <div className="optech-blog-sidebar">
                {/* blog search start */}
                <BlogSearch />
                {/* blog search end */}

                {/* blog category start */}
                <BlogCategory />
                {/* blog category end */}

                {/* blog recent post start */}
                <BlogRecentPost />
                {/* blog recent post end */}

                {/* blog tag start */}
                <BlogTag />
                {/* blog tag end */}
            </div>
        </>
    );
}
