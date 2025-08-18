import BlogGridItem from "@/components/(blog)/blog-grid/blog-grid-item";
import Footer8 from "@/components/(layout)/footer/footer-8";
import Header6 from "@/components/(layout)/header/header-6";
import Breadcrumb from "@/components/ui/breadcrumbs/breadcrumb";

export const metadata = {
    title: "Blog Grid",
};

export default function BlogGrid() {
    return (
        <>
            <Header6 />
            <Breadcrumb
                title="Blog Grid"
                path={[{ title: "Home", link: "/" }, { title: "Blog Grid" }]}
            />
            <BlogGridItem />
            <Footer8 />
        </>
    );
}
