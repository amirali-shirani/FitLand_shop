import React from 'react';
import Image from "next/image";
import image from '@/public/assets/images/home/banner3.svg';

const CampBanner = () => {
    return (
            <section className="w-full py-10 relative">
                <div>
                    <Image
                        src={image}
                        className="object-cover object-top w-full lg:h-[750px] h-[175px]"
                        alt="Banner"
                    />
                </div>

                <div className="absolute lg:space-y-3 lg:top-2/12 top-1/4 right-8 lg:right-28  text-right text-white lg:text-3xl text-xs">
                    <h2>
                        بزودی کامل ترین مجموعه از
                    </h2>
                    <h2 className="font-bold">لوازم کمپ در فیت لند</h2>
                    <h3 className="lg:text-2xl text-[10px]">از سفر لذت ببر</h3>
                </div>
            </section>
    );
};

export default CampBanner;