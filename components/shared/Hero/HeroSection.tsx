import React from 'react';
import {Button} from '../UI';
import Image from "next/image";
import ManHero from "@/public/assets/images/man-hero.svg";
import {heroInfos} from "@/lib/data";
import HeroInfo from "@/components/shared/Hero/HeroInfo";
import HeroLayer from "@/public/assets/images/hero-layer.svg";

const HeroSection = () => {
    return (
        <>
        <section className=" container mt-10 flex  justify-between">
            <div className="space-y-4">
                <h4 className="text-custom-neutral text-base">راحت و مطمئن خرید کنید!</h4>
                <h1 className="text-secondary lg:text-3xl text-xl gap-8 flex flex-col font-semibold"><span> همراه تو در مسیر سلامتی</span>
                    <span className="text-primary">سهم بزرگ خودتان را امروز بگیرید!</span></h1>
                <p className="text-custom-neutral w-3/4 my-7">بزرگترین حراج فصل فیت لند همین حالا شرع کن و محصولات با یه
                    تخفیف شگفت انگیز بخر!</p>
                <Button link="/">مشاهده محصولات</Button>
            </div>
            <div className="z-20">
                <Image src={ManHero} alt="man hero" className="w-11/12 h-[30rem] z-20"/>

            </div>
            <div className="flex flex-col justify-evenly">
                {heroInfos.map((info, index) => (
                    <HeroInfo key={index} title={info.title} number={info.number} icon={info.icon}/>
                ))}
            </div>
        </section>
            <Image src={HeroLayer} alt="man hero" className="w-full h-32 -translate-y-20 z-10 "/>
        </>
    );
};

export default HeroSection;