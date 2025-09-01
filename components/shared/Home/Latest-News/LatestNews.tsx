"use client"
import React from 'react';
import {news} from "@/lib/data";
import NewsCard from "@/components/shared/Home/Latest-News/NewsCard";
import {Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const LatestNews = () => {
    return (
        <section className='container mx-auto mt-10'>
            <h1 className="lg:text-3xl text-xl font-bold text-center">جدیدترین ها در اخبار ورزش</h1>
            <div className="mt-10">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{clickable: true}}
                    spaceBetween={30}
                    breakpoints={{
                        430: {slidesPerView: 1},
                        768: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    {news.map((n, index) => (
                        <SwiperSlide key={index}>
                            <NewsCard
                                key={index}
                                title={n.title}
                                description={n.description}
                                link={n.link}
                                image={n.image}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default LatestNews;