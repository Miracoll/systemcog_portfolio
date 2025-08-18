"use client";
import { shop } from "@/data/data";
import useShop from "@/hooks/zustand/use-shop";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ShopDetail({ paramId }) {
    const [count, setCount] = useState(1);
    const { products, addCart } = useShop();

    const cartProduct = products.find((item) => item.id == paramId);
    const product = shop.find((item) => item.id == paramId);

    // inc handler
    const incHandler = () => {
        setCount(Number(count) + 1);
    };

    // dec handler
    const decHandler = () => {
        if (count === 1) return;
        setCount(Number(count) - 1);
    };

    // add to cart handler
    const addCartHandler = (e) => {
        e.preventDefault();
        addCart(product, Number(count));
    };

    useEffect(() => {
        setCount(cartProduct?.qty || 1);
    }, [cartProduct]);

    return (
        <>
            <div className="optech-details-content">
                <h2>{product.title}</h2>
                <h6>${product.price.toFixed(2)}</h6>
                <p>
                    We are architects of innovation, trailblazers of
                    technological advancement, and partners in your success. As
                    a dynamic and forward-thinking organization
                </p>
                <div className="optech-product-wrap">
                    <div className="optech-product-number">
                        <span
                            onClick={decHandler}
                            className="optech-product-minus"
                        >
                            <i className="ri-subtract-line" />
                        </span>
                        <input
                            type="number"
                            value={count}
                            onChange={(e) => setCount(e.target.value)}
                        />
                        <span
                            onClick={incHandler}
                            className="optech-product-plus"
                        >
                            <i className="ri-add-line" />
                        </span>
                    </div>
                    <Link
                        className="optech-product-btn"
                        href="#"
                        data-text="Add to Cart"
                        onClick={(e) => addCartHandler(e)}
                    >
                        <span className="btn-wraper">Add to Cart</span>
                    </Link>
                </div>
                <div className="optech-product-info">
                    <h5>Quick info</h5>
                    <ul>
                        <li>
                            <span>Category: </span>
                            <Link href="/shop">Smart Watch</Link>
                        </li>
                        <li>
                            <span>Tags: </span>
                            <Link href="/shop">Shop,</Link>
                            <Link href="/shop">Technology</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
