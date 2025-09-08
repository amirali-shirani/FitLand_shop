import React from 'react';
import { siteInfo } from "@/lib/data";
import InfoCard from "@/components/shared/Home/Site-Info/InfoCard";

const SiteInfo = () => {
    return (
        <section className="bg-site-info py-12 lg:py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
                    <div className="order-2 text-center lg:text-right">
                        <h1 className="text-lg lg:text-2xl font-bold text-secondary max-w-md">
                            با بیش از ده سال سابقه فروش لوازم ورزشی و لباس های ورزشی
                        </h1>
                    </div>
                    <div className="order-1 flex flex-row flex-wrap justify-center gap-4 sm:gap-6">
                        {siteInfo.map((info, index) => (
                            <InfoCard key={index} title={info.title} icon={info.icon} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SiteInfo;