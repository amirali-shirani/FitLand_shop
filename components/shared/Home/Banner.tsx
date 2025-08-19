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
                    className="object-cover object-top w-full lg:h-[750px] h-[175px]"
                    alt="Banner"
                />
            </div>

            <div className="absolute top-1/4 right-5 lg:top-1/3 lg:right-20 text-right
            lg:text-3xl text-[10px] lg:space-y-3">
                <h2 className="">
                    {title}
                </h2>
                <h2 className="font-bold">{subTitle}</h2>
                <Button link={link} className="lg:mt-4 hidden">
                    مشاهده همه محصولات
                </Button>
            </div>
        </section>
    );
};

export default Banner;
