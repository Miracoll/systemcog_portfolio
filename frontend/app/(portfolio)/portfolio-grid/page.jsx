import Footer8 from "@/components/(layout)/footer/footer-8";
import Header6 from "@/components/(layout)/header/header-6";
import PortfolioItem from "@/components/(portfolio)/portfolio-grid/portfolio-item";
import Breadcrumb from "@/components/ui/breadcrumbs/breadcrumb";
import WorkTogether2 from "@/components/ui/sections/work-together-2";

export const metadata = {
    title: "Portfolio Grid",
};

export default function PortfolioGrid() {
    return (
        <>
            <Header6 />
            <Breadcrumb
                title="Portfolio Grid"
                path={[
                    { title: "Home", link: "/" },
                    {
                        title: "Portfolio Grid",
                    },
                ]}
            />
            <PortfolioItem />
            <WorkTogether2 />
            <Footer8 />
        </>
    );
}
