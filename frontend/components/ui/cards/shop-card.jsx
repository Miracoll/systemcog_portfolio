"use client";
import useShop from "@/hooks/zustand/use-shop";
import Image from "next/image";
import Link from "next/link";

export default function ShopCard({ data }) {
    const { addCart } = useShop();

    // add to cart handler
    const addCartHandler = (product) => {
        addCart(product, 1);
    };

    return (
        <>
            <div className="optech-shop-wrap">
                <div className="optech-shop-thumb">
                    <Link href={`/shop-details/${data.id}`}>
                        <Image
                            height="0"
                            width="0"
                            sizes="100vw"
                            priority
                            src={data.imgUrl}
                            alt="shop-img"
                            className="h-auto w-100"
                        />
                    </Link>
                    <Link
                        className="optech-shop-btn"
                        data-text="Add to Cart"
                        href={`/shop-details/${data.id}`}
                        onClick={() => addCartHandler(data)}
                    >
                        <span className="btn-wraper">Add to Cart</span>
                    </Link>
                    {data.oldPrice && (
                        <Link className="optech-shop-badge" href="/shop">
                            Sale
                        </Link>
                    )}
                </div>
                <div className="optech-shop-data">
                    <Link href={`/shop-details/${data.id}`}>
                        <h5>{data.title}</h5>
                    </Link>
                    <h6>
                        ${data.price.toFixed(2)}
                        {data?.oldPrice && (
                            <del>${data.oldPrice.toFixed(2)}</del>
                        )}
                    </h6>
                </div>
            </div>
        </>
    );
}
