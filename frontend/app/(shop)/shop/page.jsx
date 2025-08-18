import Footer8 from "@/components/(layout)/footer/footer-8";
import Header6 from "@/components/(layout)/header/header-6";
import ShopItems from "@/components/(shop)/shop/shop-items";
import Breadcrumb from "@/components/ui/breadcrumbs/breadcrumb";

export const metadata = {
    title: "Shop",
};

export default function Shop() {
    return (
        <>
            <Header6 />
            <Breadcrumb
                title="Shop"
                path={[
                    { title: "Home", link: "/" },
                    {
                        title: "Shop",
                    },
                ]}
            />
            <ShopItems />
            <Footer8 />
        </>
    );
}
