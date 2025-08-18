"use client";
import useShop from "@/hooks/zustand/use-shop";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CartTableBox({ data, index }) {
    const [count, setCount] = useState(data.qty || 1);
    const { removeCart, updateQty } = useShop();

    // inc handler
    const incQtyHandler = () => {
        const newCount = count + 1;
        setCount(newCount);
        updateQty(data.id, newCount);
    };

    // dec handler
    const decQtyHandler = () => {
        if (count > 1) {
            const newCount = count - 1;
            setCount(newCount);
            updateQty(data.id, newCount);
        }
    };

    // delete handler
    const deleteHandler = () => {
        removeCart(data.id);
    };

    useEffect(() => {
        setCount(data.qty);
    }, [data.qty]);

    return (
        <>
            <tr data-aos="fade-up" data-aos-duration={800 + index * 100}>
                <td>
                    <div className="optech-cart-thumb">
                        <i onClick={deleteHandler} className="ri-close-line" />
                        <Image
                            height="0"
                            width="0"
                            sizes="100vw"
                            src={data.imgUrl}
                            alt="shop"
                        />
                        <h5>${data.price.toFixed(2)}</h5>
                    </div>
                </td>
                <td>${(data.price * (data.qty || 1)).toFixed(2)}</td>
                <td>
                    <div className="optech-product-number">
                        <span
                            onClick={decQtyHandler}
                            className="optech-product-minus"
                        >
                            <i className="ri-subtract-line" />
                        </span>
                        <input
                            type="number"
                            onChange={(e) => setCount(Number(e.target.value))}
                            value={count}
                            disabled
                        />
                        <span
                            onClick={incQtyHandler}
                            className="optech-product-plus"
                        >
                            <i className="ri-add-line" />
                        </span>
                    </div>
                </td>
                <td>${(data.price * (data.qty || 1)).toFixed(2)}</td>
            </tr>
        </>
    );
}
