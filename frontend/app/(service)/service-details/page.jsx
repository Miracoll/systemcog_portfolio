import Footer8 from "@/components/(layout)/footer/footer-8";
import Header6 from "@/components/(layout)/header/header-6";
import ServiceSingleInfo from "@/components/(service)/service-details/service-single-info";
import Breadcrumb from "@/components/ui/breadcrumbs/breadcrumb";
import WorkTogether2 from "@/components/ui/sections/work-together-2";

export const metadata = {
    title: "Web Development",
};

export default function ServiceDetails() {
    return (
        <>
            <Header6 />
            <Breadcrumb
                title="Web Development"
                path={[
                    { title: "Home", link: "/" },
                    { title: "Service", link: "/service" },
                    {
                        title: "Web Development",
                    },
                ]}
            />
            <ServiceSingleInfo />
            <WorkTogether2 />
            <Footer8 />
        </>
    );
}
