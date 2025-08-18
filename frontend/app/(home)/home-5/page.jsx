import AwesomeService from "@/components/(home)/home-5/awesome-service";
import ChooseUs from "@/components/(home)/home-5/choose-us";
import CompanyOverview from "@/components/(home)/home-5/company-overview";
import CustomerSay from "@/components/(home)/home-5/customer-say";
import Hero from "@/components/(home)/home-5/hero";
import RecentBlog from "@/components/(home)/home-5/recent-blog";
import RecentProject from "@/components/(home)/home-5/recent-project";
import Footer5 from "@/components/(layout)/footer/footer-5";
import Header5 from "@/components/(layout)/header/header-5";
import Achievement2 from "@/components/ui/sections/achievement-2";
import WorkingProcess from "@/components/ui/sections/working-process";

export const metadata = {
    title: "Home-5",
};

export default function Home5() {
    return (
        <>
            <Header5 />
            <Hero />
            <ChooseUs />
            <CompanyOverview />
            <AwesomeService />
            <WorkingProcess />
            <RecentProject />
            <Achievement2 />
            <CustomerSay />
            <RecentBlog />
            <Footer5 />
        </>
    );
}
