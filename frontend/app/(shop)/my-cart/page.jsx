import Footer8 from "@/components/(layout)/footer/footer-8";
import Header6 from "@/components/(layout)/header/header-6";
import CartTable from "@/components/(shop)/my-cart/cart-table";
import CartTotal from "@/components/(shop)/my-cart/cart-total";
import Breadcrumb from "@/components/ui/breadcrumbs/breadcrumb";

export const metadata = {
    title: "My Cart",
};

export default function MyCart() {
    return (
        <>
            <Header6 />
            <Breadcrumb
                title="Shop Details"
                path={[
                    { title: "Home", link: "/" },
                    {
                        title: "My Cart",
                    },
                ]}
            />
            <CartTable />
            <CartTotal />
            <Footer8 />
        </>
    );
}
