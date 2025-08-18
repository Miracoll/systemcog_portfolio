import Footer8 from "@/components/(layout)/footer/footer-8";
import Header6 from "@/components/(layout)/header/header-6";
import FaqCollapses from "@/components/(utility)/faq/faq-collapses";
import FaqQuestion from "@/components/(utility)/faq/faq-question";
import Breadcrumb from "@/components/ui/breadcrumbs/breadcrumb";
import WorkTogether2 from "@/components/ui/sections/work-together-2";

export const metadata = {
    title: "Faqs",
};

export default function Faq() {
    return (
        <>
            <Header6 />
            <Breadcrumb
                title="Faqs"
                path={[
                    { title: "Home", link: "/" },
                    {
                        title: "Faqs",
                    },
                ]}
            />
            <FaqCollapses />
            <FaqQuestion />
            <WorkTogether2 />
            <Footer8 />
        </>
    );
}
