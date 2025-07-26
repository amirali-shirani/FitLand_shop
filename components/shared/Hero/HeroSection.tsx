// components/shared/Hero/HeroSection.jsx

import React from 'react';
import {Button} from '../UI';
import Image from "next/image";
import ManHero from "@/public/assets/images/man-hero.svg"; // فرض می‌کنیم این تصویر شماست
import {heroInfos} from "@/lib/data";
import HeroInfo from "@/components/shared/Hero/HeroInfo";
import HeroLayer from "@/public/assets/images/hero-layer.svg";

const HeroSection = () => {
    return (
        <section className="container mt-8 overflow-hidden">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                <div className="space-y-5 text-center lg:text-right">
                    <h4 className="text-custom-neutral text-base">راحت و مطمئن خرید کنید!</h4>
                    <h1 className="text-secondary lg:text-3xl text-2xl gap-2 flex flex-col font-semibold">
                        <span>همراه تو در مسیر سلامتی</span>
                        <span className="text-primary">سهم بزرگ خودتان را امروز بگیرید!</span>
                    </h1>
                    <p className="text-custom-neutral lg:w-full my-7">
                        بزرگترین حراج فصل فیت لند همین حالا شروع کن و محصولات با یه تخفیف شگفت انگیز بخر!
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <Button link="/">مشاهده محصولات</Button>
                    </div>
                </div>

                <div className="z-20 order-first lg:order-none">
                    <Image src={ManHero} alt="man hero" className="w-[300px] h-auto lg:w-[450px] lg:h-auto z-20"/>
                </div>


                <div className="flex flex-col gap-8 lg:gap-6 lg:justify-evenly w-full lg:w-auto">
                    {heroInfos.map((info, index) => (
                        <HeroInfo key={index} title={info.title} number={info.number} icon={info.icon}/>
                    ))}
                </div>
            </div>
            <Image src={HeroLayer} alt="hero layer" className="w-full h-auto -translate-y-20 z-10"/>
        </section>
    );
};

export default HeroSection;