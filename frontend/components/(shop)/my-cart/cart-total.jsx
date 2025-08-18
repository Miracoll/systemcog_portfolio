"use client";
import useShop from "@/hooks/zustand/use-shop";
import { priceCalculate } from "@/lib/fn";
import Link from "next/link";

export default function CartTotal() {
    const { products } = useShop();

    // calculate total price
    const totatPrice = priceCalculate(products);

    return (
        <>
            <div className="section optech-section-padding-bottom">
                <div className="container">
                    <div className="optech-cart-total">
                        <h5>Cart Totals</h5>
                        <div className="optech-cart-total-item">
                            <p>Subtotal:</p>
                            <p>${totatPrice.toFixed(2)}</p>
                        </div>
                        <div className="optech-cart-total-item">
                            <p>Subtotal:</p>
                            <p>
                                <span>${totatPrice.toFixed(2)}</span>
                            </p>
                        </div>
                        <Link
                            className="optech-default-btn rt-mt-40"
                            data-aos-duration={800}
                            data-aos="fade-up"
                            data-text="Proceed to Checkout"
                            href="/checkout"
                        >
                            <span className="btn-wraper">
                                Proceed to Checkout
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
