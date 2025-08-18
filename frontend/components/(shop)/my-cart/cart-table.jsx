"use client";
import useShop from "@/hooks/zustand/use-shop";
import CartTableBox from "./ui/cart-table-box";
import Image from "next/image";
import Link from "next/link";

export default function CartTable() {
    const { products } = useShop();

    return (
        <>
            <div className="optech-cart-section">
                <div className="container">
                    <div className="optech-cart-list">
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* product item start */}
                                {products?.map((item, i) => (
                                    <CartTableBox
                                        key={i}
                                        data={item}
                                        index={i}
                                    />
                                ))}
                                {/* product item end */}
                            </tbody>
                        </table>
                    </div>
                    <div className="optech-cart-footer">
                        <div className="optech-cupon-code">
                            <input type="number" placeholder="Coupon code" />
                            <Image
                                height={17}
                                width={18}
                                src="/assets/images/shop/shop.svg"
                                alt="icon"
                            />
                        </div>
                        <Link
                            className="optech-default-btn optech-light-btn"
                            data-aos-duration={800}
                            data-aos="fade-up"
                            data-text="Update Cart"
                            href="/contact"
                        >
                            <span className="btn-wraper">Update Cart</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
