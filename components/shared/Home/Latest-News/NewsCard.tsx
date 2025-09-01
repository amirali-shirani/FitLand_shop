import React from 'react';
import Image, {StaticImageData} from "next/image";
import {Button} from "@/components/shared/UI";
import Link from "next/link";

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
                  }: newsCardProps) => {
    return (
        <div className="rounded-lg border border-gray-300 space-y-4">
            <Link href={link}>
                <Image src={image} alt={title}
                       className="hover:scale-105 w-full rounded-lg transition-transform object-cover "/>
            </Link>
            <div className="p-4 space-y-4">
                <h2 className="text-base lg:text-2xl font-bold">{title}</h2>
                <p className="font-semibold">{description}</p>
                <Link href={link}>
                    <Button className="!bg-primary">مشاهده اخیر</Button>
                </Link>
            </div>
        </div>
    );
};

export default NewsCard;