import BlogSingleInfo from "@/components/(blog)/blog-details/blog-single-info";
import Footer8 from "@/components/(layout)/footer/footer-8";
import Header6 from "@/components/(layout)/header/header-6";
import Breadcrumb from "@/components/ui/breadcrumbs/breadcrumb";

export const metadata = {
    title: "Technology support allows erie non-profit to serve",
};

export default function BlogDetails() {
    return (
        <>
            <Header6 />
            <Breadcrumb
                title="Technology support allows erie non-profit to serve"
                path={[
                    { title: "Home", link: "/" },
                    { title: "Blog", link: "/blog" },
                    {
                        title: "Technology support allows erie non-profit to serve",
                    },
                ]}
            />
            <BlogSingleInfo />
            <Footer8 />
        </>
    );
}
