import Footer8 from "@/components/(layout)/footer/footer-8";
import Header6 from "@/components/(layout)/header/header-6";
import ContactForm from "@/components/contact/contact-form";
import ContactMap from "@/components/contact/contact-map";
import Breadcrumb from "@/components/ui/breadcrumbs/breadcrumb";

export const metadata = {
    title: "Contact Us",
};

export default function PortfolioGrid() {
    return (
        <>
            <Header6 />
            <Breadcrumb
                title="Contact Us"
                path={[
                    { title: "Home", link: "/" },
                    {
                        title: "Contact Us",
                    },
                ]}
            />
            <ContactForm />
            <ContactMap />
            <Footer8 />
        </>
    );
}
