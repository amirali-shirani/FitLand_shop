"use client"
import React from 'react';
import { latestShoes } from "@/lib/data";
import SpecialOfferCard from "@/components/shared/Home/SpecialOffers/SpecialOfferCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";


const LatestShoes = () => {
    return (
        <section className="mt-20 w-full">
            <h1 className="lg:text-3xl text-xl font-bold text-center">جدید ترین کفش های ورزشی</h1>
            <div className="lg:py-16 py-8 z-10">
                <h4 className="text-xl flex justify-end items-center gap-3 px-10"><span><FaRegArrowAltCircleLeft/></span> مشاهده همه </h4>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                    loop={true}
                    breakpoints={{430: {slidesPerView: 2,},
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        }
                    }}
                    className="w-[90%] mx-auto"
                >
                    {latestShoes.map((offer, index) => {
                        const { title, price, image, sizes, brand, colors, discount } = offer;
                        return (
                            <SwiperSlide key={index}>
                                <SpecialOfferCard
                                    title={title}
                                    price={price}
                                    image={image}
                                    sizes={sizes}
                                    brand={brand}
                                    colors={colors}
                                    discount={discount}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
};

export default LatestShoes;