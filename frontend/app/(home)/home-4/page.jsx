import AwesomeService from "@/components/(home)/home-4/awesome-service";
import Hero from "@/components/(home)/home-4/hero";
import RecentProject from "@/components/(home)/home-4/recent-project";
import Footer4 from "@/components/(layout)/footer/footer-4";
import Header4 from "@/components/(layout)/header/header-4";
import ExpertTeam from "@/components/ui/sections/expert-team";
import Faq from "@/components/ui/sections/faq";
import Introduction from "@/components/ui/sections/introduction";
import Pricing from "@/components/ui/sections/pricing";
import RecentBlog from "@/components/ui/sections/recent-blog";

export const metadata = {
    title: "Home-4",
};

export default function Home4() {
    return (
        <>
            <Header4 />
            <Hero />
            <AwesomeService />
            <Introduction />
            <RecentProject />
            <Pricing />
            <ExpertTeam />
            <Faq />
            <RecentBlog />
            <Footer4 />
        </>
    );
}
