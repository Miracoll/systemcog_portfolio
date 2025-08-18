import { blog1 } from "@/data/data";
import BlogPagination from "./ui/blog-pagination";
import BlogCard from "@/components/ui/cards/ui/blog-card";
import BlogSidebar from "@/components/ui/sidebar/blog-sidebar";

export default function BlogMain() {
    return (
        <>
            <div className="section optech-section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            {/* blog card start */}
                            {blog1?.map((item, i) => (
                                <div
                                    key={i}
                                    data-aos="fade-up"
                                    data-aos-duration={600}
                                >
                                    <BlogCard data={item} />
                                </div>
                            ))}
                            {/* blog card end */}

                            {/* blog pagination start */}
                            <BlogPagination />
                            {/* blog pagination end */}
                        </div>
                        <div className="col-lg-4">
                            {/* blog sidebar start */}
                            <BlogSidebar />
                            {/* blog sidebar end */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
