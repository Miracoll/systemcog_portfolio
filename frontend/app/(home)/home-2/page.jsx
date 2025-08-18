import AwesomeService from "@/components/(home)/home-2/awesome-service";
import Hero from "@/components/(home)/home-2/hero";
import RecentBlog from "@/components/(home)/home-2/recent-blog";
import RecentProject from "@/components/(home)/home-2/recent-project";
import WorkingProcess from "@/components/(home)/home-2/working-process";
import Footer2 from "@/components/(layout)/footer/footer-2";
import Header2 from "@/components/(layout)/header/header-2";
import About from "@/components/ui/sections/about";
import Achievement from "@/components/ui/sections/achievement";
import ContactForm from "@/components/ui/sections/contact-form";
import Pricing2 from "@/components/ui/sections/pricing-2";

export const metadata = {
    title: "Home-2",
};

export default function Home2() {
    return (
        <>
            <Header2 />
            <Hero />
            <About />
            <Achievement />
            <AwesomeService />
            <RecentProject />
            <WorkingProcess />
            <Pricing2 />
            <ContactForm />
            <RecentBlog />
            <Footer2 />
        </>
    );
}
