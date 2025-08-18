import React from 'react';
import Image from 'next/image';

// آیکون لایه‌ها
const LayersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5 md:h-6 md:w-6">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
    </svg>
);

type OfferCardProps = {
    brand: string;
    image: string;
}

const OfferCard = ({brand, image}: OfferCardProps) => {
    return (
        <div
            className="relative w-[342px] h-[225px] lg:w-[392px] lg:h-[462px] rounded-2xl overflow-hidden
            shadow-lg group cursor-pointer flex-shrink-0">
            <Image
                src={image}
                alt="تخفیفات فصل"
                fill
                className="transition-transform object-cover object-top    duration-500 group-hover:scale-110"
            />

            <div className="absolute bottom-0 h-24 lg:h-32 left-0 w-full z-10
             transition-opacity duration-300 group-hover:opacity-0">
                <Image
                    src="/assets/images/offer-card.svg"
                    alt=""
                    width={392}
                    height={160}
                    layout="responsive"
                />

                <div className="absolute bottom-0 left-0 w-full p-4 lg:p-6 text-white">
                    <h3 className="text-sm lg:text-base font-bold">
                        جدیدترین تخفیفات فصل <span>{brand}</span><br/>
                        <span className="text-[#FC9877]">۵۰٪</span> تخفیف روی تمام محصولات
                    </h3>
                </div>
            </div>
            <div
                className="absolute inset-0 z-20 bg-black/50 backdrop-blur-md
                           flex flex-col justify-center items-center text-center p-4
                           opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-xl md:text-2xl font-bold text-white">
                    فقط با یک کلیک وارد دنیای محصولات جدید شوید
                </p>
                <div className="mt-6 md:mt-8 flex items-center justify-center border-2 border-white rounded-xl
                 px-5 py-2 md:px-6 md:py-3 text-white text-base md:text-lg font-medium">
                    <LayersIcon />
                    <span>جدید ترین محصولات</span>
                </div>
            </div>
        </div>
    );
};

export default OfferCard;