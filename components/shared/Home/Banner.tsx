import React from 'react';
import Image, {StaticImageData} from 'next/image';
import { Button } from "@/components/shared/UI";

type Props = {
    image : StaticImageData | string;
    title : string;
    subTitle : string;
    link : string
}

const Banner = ({image , title , subTitle , link} : Props ) => {
    return (
        <section className="w-full py-10 relative">
            <div>
                <Image
                    src={image}
                    className="object-cover w-full lg:h-[750px] h-[175px]"
                    alt="Banner"
                />
            </div>

            <div className="absolute top-1/3 right-20 -translate-y-1/2 text-right">
                <h2 className="lg:text-2xl text-xs">
                    {title} <br/>
                    <span className="font-bold mt-2">{subTitle}</span>
                </h2>
                <Button link={link} className="mt-4">
                    مشاهده همه محصولات
                </Button>
            </div>
        </section>
    );
};

export default Banner;
