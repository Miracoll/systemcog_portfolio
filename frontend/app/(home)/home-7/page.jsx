import AwesomeService from "@/components/(home)/home-7/awesome-service";
import Branding from "@/components/(home)/home-7/branding";
import Hero from "@/components/(home)/home-7/hero";
import OurExpertise from "@/components/(home)/home-7/our-expertise";
import RecentBlog from "@/components/(home)/home-7/recent-blog";
import RecentProject from "@/components/(home)/home-7/recent-project";
import Footer7 from "@/components/(layout)/footer/footer-7";
import Header7 from "@/components/(layout)/header/header-7";
import Faq from "@/components/ui/sections/faq";
import Feature from "@/components/ui/sections/feature";
import Pricing from "@/components/ui/sections/pricing";

export const metadata = {
    title: "Home-7",
};

export default function Home7() {
    return (
        <>
            <Header7 />
            <Hero />
            <AwesomeService />
            <OurExpertise />
            <Branding />
            <RecentProject />
            <Feature />
            <Pricing />
            <RecentBlog />
            <Faq />
            <Footer7 />
        </>
    );
}
