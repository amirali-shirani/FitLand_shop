import React from 'react';
import Image from 'next/image';
import BannerHome from '@/public/assets/images/Baner.svg';

const Banner = () => {
    return (
        <section className="w-full">
            <Image src={BannerHome} className="object-cover w-full lg:h-[600px] h-[175px]" alt="Banner" />
        </section>
    );
};

export default Banner;