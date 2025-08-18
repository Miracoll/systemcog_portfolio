import Hero from "@/components/(home)/home-8/hero";
import Footer8 from "@/components/(layout)/footer/footer-8";
import Header8 from "@/components/(layout)/header/header-8";
import AwesomeService from "@/components/ui/sections/awesome-service";
import ContactForm from "@/components/ui/sections/contact-form";
import ExpertTeam from "@/components/ui/sections/expert-team";
import Introduction from "@/components/ui/sections/introduction";
import RecentBlog from "@/components/ui/sections/recent-blog";
import RecentProject from "@/components/ui/sections/recent-project";
import Testimonial from "@/components/ui/sections/testimonial";
import WorkingProcess from "@/components/ui/sections/working-process";

export const metadata = {
    title: "Home-8",
};

export default function Home8() {
    return (
        <>
            <Header8 />
            <Hero />
            <AwesomeService />
            <Introduction />
            <WorkingProcess />
            <RecentProject />
            <Testimonial />
            <ExpertTeam />
            <ContactForm />
            <RecentBlog />
            <Footer8 />
        </>
    );
}
