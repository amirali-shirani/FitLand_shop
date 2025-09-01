import React from 'react';
import Image, {StaticImageData} from 'next/image';
import Link from "next/link";

type cardProps = {
    title: string;
    price: number;
    image: StaticImageData | string;
    sizes: string[];
    brand: string;
    colors: string[];
    discount: number | string;
}


const SpecialOfferCard = ({
                              title, price, image, sizes, brand
                              , colors, discount
                          }: cardProps) => {
    return (
        <div className="relative mt-10 border border-gray-400 rounded-xl ">
            <div className={`absolute top-2.5  left-11 h-10 w-10 text-sm flex items-center justify-center rounded-full ${discount === "VIP" ? "bg-primary" :
                "bg-[#67AAE6]"}`}>{discount === "VIP" ? discount : `${discount}%`}</div>
            <Link href="/">
                <Image src={image} alt={title} className="object-cover w-full"/>
            </Link>
           <div className="px-5 space-y-5 mt-3">
               <h2 className="text-base">{title} مدل {brand}</h2>
               <h3 className="text-sm flex gap-1">{price}<span>تومان</span></h3>
               <h5 className="text-xs text-custom-neutral">از سایز {sizes[0]} تا سایز {sizes[1]}</h5>
               <div className="flex">
                   {colors.map((color, index) => (
                           <div key={index} className={`w-5 h-5 rounded-full bg-${color}-500 `}></div>
                   ))}
               </div>
           </div>
        </div>
    );
};

export default SpecialOfferCard;