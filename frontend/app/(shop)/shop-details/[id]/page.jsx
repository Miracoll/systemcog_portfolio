import Footer8 from "@/components/(layout)/footer/footer-8";
import Header6 from "@/components/(layout)/header/header-6";
import ShopInfo from "@/components/(shop)/shop-details/shop-info";
import ShopInfoTab from "@/components/(shop)/shop-details/shop-info-tab";
import ShopRelatedProduct from "@/components/(shop)/shop-details/shop-related-product";
import Breadcrumb from "@/components/ui/breadcrumbs/breadcrumb";
export const metadata = {
    title: "Shop Details",
};

export default async function ShopDetails({ params }) {
    const id = (await params).id;
    return (
        <>
            <Header6 />
            <Breadcrumb
                title="Shop Details"
                path={[
                    { title: "Home", link: "/" },
                    { title: "Shop", link: "/shop" },
                    {
                        title: "Shop Details",
                    },
                ]}
            />
            <ShopInfo paramId={id} />
            <ShopInfoTab />
            <ShopRelatedProduct />
            <Footer8 />
        </>
    );
}
