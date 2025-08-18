import Footer8 from "@/components/(layout)/footer/footer-8";
import Header6 from "@/components/(layout)/header/header-6";
import NotFundSection from "@/components/(utility)/404/404";

export const metadata = {
    title: "404",
};

export default function NotFound() {
    return (
        <>
            <Header6 />
            <NotFundSection />
            <Footer8 />
        </>
    );
}
