"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { FreeMode, Thumbs } from "swiper/modules";
import Image from "next/image";
import { shop } from "@/data/data";

export default function ShopProductGallery({ paramId }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const img = shop.find((item) => item.id == paramId)?.imgUrl;

    const images = [
        img,
        "/assets/images/shop/shop2.png",
        "/assets/images/shop/shop3.png",
        "/assets/images/shop/shop4.png",
    ];

    return (
        <>
            <div data-aos="fade-up" data-aos-duration={800}>
                <Swiper
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Thumbs]}
                    className="ui-gallery"
                >
                    {images?.map((item, i) => (
                        <SwiperSlide key={i}>
                            <Image
                                height="0"
                                width="0"
                                sizes="100vw"
                                src={item}
                                alt="shop"
                                className="h-auto w-100"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={16}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Thumbs]}
                    className="ui-gallery-thumb"
                >
                    {images?.map((item, i) => (
                        <SwiperSlide key={i}>
                            <Image
                                height="0"
                                width="0"
                                sizes="100vw"
                                src={item}
                                alt="shop"
                                className="h-auto w-100"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}
