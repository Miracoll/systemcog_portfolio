import Footer8 from "@/components/(layout)/footer/footer-8";
import Header6 from "@/components/(layout)/header/header-6";
import TestimonialItems from "@/components/(utility)/testimonial/testimonial-items";
import Breadcrumb from "@/components/ui/breadcrumbs/breadcrumb";
import WorkTogether2 from "@/components/ui/sections/work-together-2";

export const metadata = {
    title: "Testimonials",
};

export default function Testimonial() {
    return (
        <>
            <Header6 />
            <Breadcrumb
                title="Testimonials"
                path={[
                    { title: "Home", link: "/" },
                    {
                        title: "Testimonials",
                    },
                ]}
            />
            <TestimonialItems />
            <WorkTogether2 />
            <Footer8 />
        </>
    );
}
