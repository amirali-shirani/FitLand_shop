import React from 'react';
import Image, {StaticImageData} from 'next/image';
import OfferCard from "@/components/shared/Home/Offers/OfferCard";
import {Button} from "@/components/shared/UI";
import layer from "@/public/assets/images/offers/offer-layer.svg";

type Offer = {
    image: StaticImageData | string;
    brand: string;
};

type Props = {
    title: string;
    desc: string;
    link: string;
    data: Offer[];
};


const OfferSection = ({title, data, desc, link}: Props) => {
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
                    className="flex flex-col md:flex-row lg:items-stretch items-center justify-center gap-10 xl:gap-16">
                    {data.map((offer, index) => (
                        <OfferCard key={index} image={offer.image} brand={offer.brand}/>
                    ))}
                    <div className="lg:flex flex-col hidden lg:items-start justify-end
                         lg:text-right gap-4 max-w-md self-end">
                        <h2 className="font-semibold text-base lg:text-2xl">
                            {title}
                        </h2>
                        <p className="text-custom-neutral leading-relaxed w-11/12">
                            {desc}
                        </p>
                        <Button link={link} className="px-10 !bg-primary hover:bg-primary-dark transition-colors">
                            مشاهده همه محصولات
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfferSection;