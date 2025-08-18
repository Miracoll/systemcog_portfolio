import Footer8 from "@/components/(layout)/footer/footer-8";
import Header6 from "@/components/(layout)/header/header-6";
import CheckoutBox from "@/components/(shop)/checkout/checkout-box";
import Breadcrumb from "@/components/ui/breadcrumbs/breadcrumb";

export const metadata = {
    title: "Checkout",
};

export default function Checkout() {
    return (
        <>
            <Header6 />
            <Breadcrumb
                title="Checkout"
                path={[
                    { title: "Home", link: "/" },
                    {
                        title: "Checkout",
                    },
                ]}
            />
            <CheckoutBox />
            <Footer8 />
        </>
    );
}
