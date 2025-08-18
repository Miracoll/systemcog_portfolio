import AwesomeService from "@/components/(home)/home-6/awesome-service";
import Hero from "@/components/(home)/home-6/hero";
import RecentBlog from "@/components/(home)/home-6/recent-blog";
import RecentProject from "@/components/(home)/home-6/recent-project";
import Footer6 from "@/components/(layout)/footer/footer-6";
import Header6 from "@/components/(layout)/header/header-6";
import About from "@/components/ui/sections/about";
import ContactForm from "@/components/ui/sections/contact-form";
import ExpertTeam2 from "@/components/ui/sections/expert-team-2";
import WorkTogether from "@/components/ui/sections/work-together";

export const metadata = {
    title: "Home-6",
};

export default function Home6() {
    return (
        <>
            <Header6 />
            <Hero />
            <About />
            <AwesomeService />
            <RecentProject />
            <ContactForm />
            <ExpertTeam2 />
            <WorkTogether />
            <RecentBlog />
            <Footer6 />
        </>
    );
}
