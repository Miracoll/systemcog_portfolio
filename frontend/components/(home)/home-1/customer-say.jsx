"use client";
import { Pagination } from "swiper/modules";
import CustomerSayCard from "./ui/customer-say-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { customerSay1 } from "@/data/data";

export default function CustomerSay() {
    return (
        <>
            <div className="section optech-section-padding bg-light1">
                <div className="container">
                    <div className="optech-section-title center">
                        <h2>
                            Don’t take our word, see what our&nbsp;customers say
                        </h2>
                    </div>

                    <Swiper
                        spaceBetween={30}
                        modules={[Pagination]}
                        data-aos="fade-up"
                        data-aos-duration={600}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        style={{ paddingBottom: "70px" }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            991: {
                                slidesPerView: 2,
                            },
                        }}
                    >
                        {/* customer say start */}
                        {customerSay1?.slice(0, 4).map((item, i) => (
                            <SwiperSlide key={i}>
                                <CustomerSayCard data={item} />
                            </SwiperSlide>
                        ))}
                        {/* customer say end */}
                    </Swiper>
                </div>
            </div>
        </>
    );
}
