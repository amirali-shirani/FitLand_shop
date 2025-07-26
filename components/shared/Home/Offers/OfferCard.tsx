import React from 'react';
import Image from 'next/image';
import offerCard from '@/public/assets/images/offer-card.svg';

type OfferCardProps = {
    brand: string;
    image: string;
}

const OfferCard = ({ brand, image }: OfferCardProps) => {


    return (
        <div className="relative w-full h-[27rem] max-w-sm rounded-xl overflow-hidden shadow-lg group z-20">
            <Image
                src={image}
                alt="تخفیفات فصل"
                fill
                className="w-full object-cover"
            />

            {/* یک div ساده که پس‌زمینه آن شکل SVG ماست */}
            <div
                className="absolute bottom-0 left-0 w-full h-40 bg-no-repeat bg-center bg-cover"

            >
                <Image src={offerCard} alt="layer" className="w-full h-60 "/>
                {/* محتوای متنی */}
                <div className="absolute bottom-0 left-0 w-full p-5 text-white">
                    <h3 className="lg:text-lg text-base space-x-1">جدیدترین تخفیفات فصل <span>{brand}</span><br />
                        <span className="text-[#FC9877]">۵۰٪</span> تخفیف روی تمام محصولات
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default OfferCard;