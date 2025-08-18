import CompanyOverview from "@/components/(home)/home-3/company-overview";
import Feature from "@/components/(home)/home-3/feature";
import Hero from "@/components/(home)/home-3/hero";
import RecentBlog from "@/components/(home)/home-3/recent-blog";
import Footer3 from "@/components/(layout)/footer/footer-3";
import Header3 from "@/components/(layout)/header/header-3";
import AwesomeService from "@/components/ui/sections/awesome-service";
import RecentProject from "@/components/ui/sections/recent-project";
import Testimonial from "@/components/ui/sections/testimonial";

export const metadata = {
    title: "Home-3",
};

export default function Home3() {
    return (
        <>
            <Header3 />
            <Hero />
            <AwesomeService />
            <CompanyOverview />
            <Feature />
            <RecentProject />
            <Testimonial />
            <RecentBlog />
            <Footer3 />
        </>
    );
}
