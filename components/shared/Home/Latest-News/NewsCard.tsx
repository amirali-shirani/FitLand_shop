import React from 'react';
import Image, {StaticImageData} from "next/image";
import {Button} from "@/components/shared/UI";

type newsCardProps = {
    title: string;
    description: string;
    link: string;
    image: string | StaticImageData;
}


const NewsCard = ({
                      title,
                      description,
                      link,
                      image
                  } : newsCardProps) => {
    return (
        <div className="rounded-lg border border-gray-300 space-y-4">
            <Image width={307} height={564} src={image} alt={title} className="object-cover w-full"/>
            <div className="p-3 space-y-4">
            <h2 className="text-base lg:text-2xl font-bold">{title}</h2>
            <p className="font-semibold">{description}</p>
            <Button link={link} className="!bg-primary">مشاهده اخیر</Button>
            </div>
        </div>
    );
};

export default NewsCard;