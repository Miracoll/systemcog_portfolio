import Footer8 from "@/components/(layout)/footer/footer-8";
import Header6 from "@/components/(layout)/header/header-6";
import TeamItems from "@/components/(team)/team/team-items";
import Breadcrumb from "@/components/ui/breadcrumbs/breadcrumb";
import WorkTogether2 from "@/components/ui/sections/work-together-2";

export const metadata = {
    title: "Our team",
};

export default function Team() {
    return (
        <>
            <Header6 />
            <Breadcrumb
                title="Our team"
                path={[
                    { title: "Home", link: "/" },
                    {
                        title: "Our team",
                    },
                ]}
            />
            <TeamItems />
            <WorkTogether2 />
            <Footer8 />
        </>
    );
}
