import React from 'react';
import Image from 'next/image';
import BannerHome from '@/public/assets/images/banner.png';
import { Button } from "@/components/shared/UI";

const Banner = () => {
    return (
        <section className="w-full py-10 relative">
            <div>
                <Image
                    src={BannerHome}
                    className="object-cover w-full lg:h-[750px] h-[175px]"
                    alt="Banner"
                />
            </div>

            <div className="absolute top-1/3 right-20 -translate-y-1/2 text-right">
                <h2 className="lg:text-2xl text-xs">
                    برای حال خوب <br/>
                    <span className="font-bold mt-2">لوازم ایروبیک و تناسب اندام بگیر</span>
                </h2>
                <Button link="/" className="mt-4">
                    مشاهده همه محصولات
                </Button>
            </div>
        </section>
    );
};

export default Banner;
