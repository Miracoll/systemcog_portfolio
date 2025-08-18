import Footer8 from "@/components/(layout)/footer/footer-8";
import Header6 from "@/components/(layout)/header/header-6";
import Breadcrumb from "@/components/ui/breadcrumbs/breadcrumb";
import About from "@/components/ui/sections/about";
import Achievement2 from "@/components/ui/sections/achievement-2";
import ContactForm from "@/components/ui/sections/contact-form";
import ExpertTeam2 from "@/components/ui/sections/expert-team-2";
import Feature from "@/components/ui/sections/feature";
import WorkTogether2 from "@/components/ui/sections/work-together-2";

export const metadata = {
    title: "About",
};

export default function AboutUs() {
    return (
        <>
            <Header6 />
            <Breadcrumb
                title="About Us"
                path={[{ title: "Home", link: "/" }, { title: "About Us" }]}
            />
            <About />
            <Feature />
            <Achievement2 />
            <ExpertTeam2 />
            <ContactForm />
            <WorkTogether2 />
            <Footer8 />
        </>
    );
}
