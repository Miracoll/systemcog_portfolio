"use client";
import useShop from "@/hooks/zustand/use-shop";
import { priceCalculate } from "@/lib/fn";
import Link from "next/link";

export default function CheckoutInfo() {
    const { products } = useShop();

    // calculate total price
    const totatPrice = priceCalculate(products);

    return (
        <>
            <div className="optech-checkuot-sidebar-column">
                <div className="optech-checkuot-sidebar">
                    <h5>Your Order</h5>
                    <ul>
                        <li>
                            Product<span>Subtotal</span>
                        </li>
                        {/* product cart start */}
                        {products?.map((item, i) => (
                            <li key={i}>
                                {item.title}
                                <span>${item.price.toFixed(2)}</span>
                            </li>
                        ))}
                        {/* product cart end */}

                        <li>
                            Total
                            <span className="total-amount">
                                ${totatPrice.toFixed(2)}
                            </span>
                        </li>
                    </ul>
                    <div className="shop-radio-btn">
                        <input id="radio-2" name="radio" type="radio" />
                        <label htmlFor="radio-2" className="radio-label">
                            Cash on delivery
                        </label>
                    </div>
                    <span>Pay with cash upon delivery.</span>
                    <p>
                        Your personal data will be used to process your order,
                        support your experience throughout this website, and for
                        other purposes described in our privacy policy.
                    </p>
                </div>
                <Link
                    className="optech-default-btn shop-order-btn"
                    href="/shop"
                    data-text="Place Order"
                >
                    <span className="btn-wraper">Place Order</span>
                </Link>
            </div>
        </>
    );
}
