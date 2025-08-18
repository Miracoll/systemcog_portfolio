"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { awesomeServices1 } from "@/data/data";
import AwesomeServiceCard2 from "@/components/ui/cards/awesome-service-card-2";

export default function AwesomeService() {
    return (
        <>
            <div className="sectin bg-light1 optech-section-padding">
                <div className="container">
                    <div className="optech-section-title center">
                        <h2>Our awesome services to give you success</h2>
                    </div>
                </div>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    data-aos="fade-up"
                    data-aos-duration={600}
                    loop={true}
                    style={{ paddingBottom: "70px" }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                            centeredSlides: true,
                        },
                        1199: {
                            slidesPerView: 3,
                        },
                        1399: {
                            slidesPerView: 4,
                        },
                        1599: {
                            slidesPerView: 5,
                        },
                        1799: {
                            slidesPerView: 6,
                        },
                    }}
                >
                    {/* awsome service card start */}
                    {awesomeServices1?.map((item, i) => (
                        <SwiperSlide key={i}>
                            <AwesomeServiceCard2 data={item} />
                        </SwiperSlide>
                    ))}
                    {/* awsome service card end */}
                </Swiper>
            </div>
        </>
    );
}
