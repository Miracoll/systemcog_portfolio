import BlogMain from "@/components/(blog)/blog/blog-main";
import Footer8 from "@/components/(layout)/footer/footer-8";
import Header6 from "@/components/(layout)/header/header-6";
import Breadcrumb from "@/components/ui/breadcrumbs/breadcrumb";

export const metadata = {
    title: "Blog",
};
export default function Blog() {
    return (
        <>
            <Header6 />
            <Breadcrumb
                title="Blog"
                path={[{ title: "Home", link: "/" }, { title: "Blog" }]}
            />
            <BlogMain />
            <Footer8 />
        </>
    );
}
