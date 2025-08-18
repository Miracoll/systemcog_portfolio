import Footer8 from "@/components/(layout)/footer/footer-8";
import Header6 from "@/components/(layout)/header/header-6";
import PortfolioMasonryItem from "@/components/(portfolio)/portfolio-masonry/portfolio-masonry-item";
import Breadcrumb from "@/components/ui/breadcrumbs/breadcrumb";
import WorkTogether2 from "@/components/ui/sections/work-together-2";

export const metadata = {
    title: "Portfolio Masonry",
};

export default function PortfolioGrid() {
    return (
        <>
            <Header6 />
            <Breadcrumb
                title="Portfolio Masonry"
                path={[
                    { title: "Home", link: "/" },
                    {
                        title: "Portfolio Masonry",
                    },
                ]}
            />
            <PortfolioMasonryItem />
            <WorkTogether2 />
            <Footer8 />
        </>
    );
}
