import React from 'react';
import { Button } from '../UI';

const HeroSection = () => {
    return (
        <section className=" container mt-10 flex items-center justify-between">
            <div className="space-y-4">
                <h4 className="text-custom-neutral text-base">راحت و مطمئن خرید کنید!</h4>
                <h1 className="text-secondary lg:text-3xl text-xl gap-5 flex flex-col font-semibold"><span> همراه تو در مسیر سلامتی</span> <span className="text-primary">سهم بزرگ خودتان را امروز بگیرید!</span></h1>
                <p className="text-custom-neutral w-3/4 my-7">بزرگترین حراج فصل فیت لند همین حالا شرع کن و محصولات با یه تخفیف شگفت انگیز بخر!</p>
                <Button link="/">مشاهده  محصولات</Button>
            </div>
            <div>

            </div>
        </section>
    );
};

export default HeroSection;