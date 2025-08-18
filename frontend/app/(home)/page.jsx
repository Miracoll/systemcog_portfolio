import AwesomeService from "@/components/(home)/home-1/awesome-service";
import CompanyOverview from "@/components/(home)/home-1/company-overview";
import CustomerSay from "@/components/(home)/home-1/customer-say";
import ExpertTeam from "@/components/(home)/home-1/expert-team";
import Feature from "@/components/(home)/home-1/feature";
import Hero from "@/components/(home)/home-1/hero";
import OurExpertise from "@/components/(home)/home-1/our-expertise";
import RecentBlog from "@/components/(home)/home-1/recent-blog";
import RecentProject from "@/components/(home)/home-1/recent-project";
import Footer1 from "@/components/(layout)/footer/footer-1";
import Header1 from "@/components/(layout)/header/header-1";
import WorkTogether from "@/components/ui/sections/work-together";

export const metadata = {
    title: "Home-1",
};

export default function Home() {
    return (
        <>
            <Header1 />
            <Hero />
            <Feature />
            <CompanyOverview />
            <AwesomeService />
            <OurExpertise />
            <RecentProject />
            <ExpertTeam />
            <CustomerSay />
            <RecentBlog />
            <WorkTogether />
            <Footer1 />
        </>
    );
}
