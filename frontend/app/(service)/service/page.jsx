import Footer8 from "@/components/(layout)/footer/footer-8";
import Header6 from "@/components/(layout)/header/header-6";
import AwesomeService from "@/components/(service)/service/awesome-service";
import Breadcrumb from "@/components/ui/breadcrumbs/breadcrumb";
import WorkTogether2 from "@/components/ui/sections/work-together-2";
import WorkingProcess from "@/components/ui/sections/working-process";

export const metadata = {
    title: "Our Services",
};

export default function Service() {
    return (
        <>
            <Header6 />
            <Breadcrumb
                title="Our Services"
                path={[
                    { title: "Home", link: "/" },
                    {
                        title: "Our Services",
                    },
                ]}
            />
            <WorkingProcess />
            <AwesomeService />
            <WorkTogether2 />
            <Footer8 />
        </>
    );
}
