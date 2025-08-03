import React from 'react';
import Image from 'next/image';
import OfferCard from "@/components/shared/Home/Offers/OfferCard";
import {Button} from "@/components/shared/UI";
import layer from "@/public/assets/images/offer-layer.svg";
import offer1 from "@/public/assets/images/offer-pic2.svg";
import offer2 from "@/public/assets/images/offer-pic1.svg";

// داده‌های مربوط به کارت‌های تخفیف
const offersData = [
    {image: offer1, brand: "نایک"},
    {image: offer2, brand: "پوما"},
];

const OfferSection = () => {
    return (
        <section className="relative py-16 lg:py-20 overflow-hidden">
            <Image
                src={layer}
                alt=""
                aria-hidden="true"
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0 w-full h-full -z-10"
            />

            <div className="container mx-auto px-4">

                <div
                    className="flex flex-col lg:flex-row lg:items-stretch items-center justify-center gap-10 xl:gap-16">
                    {offersData.map((offer, index) => (
                        <OfferCard key={index} image={offer.image} brand={offer.brand}/>
                    ))}
                    <div className="lg:flex flex-col hidden lg:items-start justify-end
                         lg:text-right gap-4 max-w-md self-end">
                        <h2 className="font-semibold text-base lg:text-2xl">
                            جدیدترین محصولات فصل را کشف کنید
                        </h2>
                        <p className="text-custom-neutral leading-relaxed w-11/12">
                            محصولات منتخب را با ارسال رایگان تهیه کنید و در سریع‌ترین زمان ممکن درب منزل تحویل بگیرید.
                        </p>
                        <Button link="/" className="px-10 !bg-primary hover:bg-primary-dark transition-colors">
                            مشاهده همه محصولات
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfferSection;