import Footer8 from "@/components/(layout)/footer/footer-8";
import Header6 from "@/components/(layout)/header/header-6";
import Pricing from "@/components/pricing/pricing";
import Breadcrumb from "@/components/ui/breadcrumbs/breadcrumb";
import Faq from "@/components/ui/sections/faq";
import WorkTogether2 from "@/components/ui/sections/work-together-2";

export const metadata = {
    title: "Pricing",
};

export default function PricingPage() {
    return (
        <>
            <Header6 />
            <Breadcrumb
                title="Pricing Plan"
                path={[{ title: "Home", link: "/" }, { title: "Pricing Plan" }]}
            />
            <Pricing />
            <Faq />
            <WorkTogether2 />
            <Footer8 />
        </>
    );
}
