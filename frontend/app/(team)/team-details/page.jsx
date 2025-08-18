import Footer8 from "@/components/(layout)/footer/footer-8";
import Header6 from "@/components/(layout)/header/header-6";
import TeamProfile from "@/components/(team)/team-details/team-profile";
import Breadcrumb from "@/components/ui/breadcrumbs/breadcrumb";
import WorkTogether2 from "@/components/ui/sections/work-together-2";

export const metadata = {
    title: "Team Single",
};

export default function TeamDetails() {
    return (
        <>
            <Header6 />
            <Breadcrumb
                title="Team Single"
                path={[
                    { title: "Home", link: "/" },
                    {
                        title: "Team Single",
                    },
                ]}
            />
            <TeamProfile />
            <WorkTogether2 />
            <Footer8 />
        </>
    );
}
