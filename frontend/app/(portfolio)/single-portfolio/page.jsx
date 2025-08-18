import Footer8 from "@/components/(layout)/footer/footer-8";
import Header6 from "@/components/(layout)/header/header-6";
import SinglePortfolioInfo from "@/components/(portfolio)/single-portfolio/single-portfolio-info";
import Breadcrumb from "@/components/ui/breadcrumbs/breadcrumb";
import WorkTogether2 from "@/components/ui/sections/work-together-2";

export const metadata = {
    title: "Cyber Security Analysis",
};

export default function PortfolioGrid() {
    return (
        <>
            <Header6 />
            <Breadcrumb
                title="Cyber Security Analysis"
                path={[
                    { title: "Home", link: "/" },
                    { title: "portfolio", link: "/portfolio-grid" },
                    {
                        title: "Cyber Security Analysis",
                    },
                ]}
            />
            <SinglePortfolioInfo />
            <WorkTogether2 />
            <Footer8 />
        </>
    );
}
