"use client"
import React from 'react';
import {bicycles} from "@/lib/data";
import SpecialOfferCard from "@/components/shared/Home/Special-Offers/SpecialOfferCard";

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SeeAllProducts from "../SeeAllProducts";


const Bicycles = () => {
    return (
        <section className="mt-20 w-full">
            <h1 className="lg:text-3xl text-xl font-bold text-center translate-y-8 z-20">تخفیفات ویژه</h1>
            <div className="lg:py-16 py-8 z-10 offer__poly lg:bg-[#F4FAFF]">
                <SeeAllProducts link="/products"/>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{clickable: true}}
                    spaceBetween={30}
                    loop={true}
                    breakpoints={{
                        430: {slidesPerView: 2,},
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        }
                    }}
                    className="w-[90%] mx-auto"
                >
                    {bicycles.map((offer, index) => {
                        const {title, price, image, sizes, brand, colors, discount} = offer;
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

export default Bicycles;