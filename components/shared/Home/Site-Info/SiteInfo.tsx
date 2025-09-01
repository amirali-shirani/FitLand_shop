import React from 'react';
import {siteInfo} from "@/lib/data";
import InfoCard from "@/components/shared/Home/Site-Info/InfoCard";

const SiteInfo = () => {
    return (
        <section className="px-52 py-10 flex justify-center lg:mt-20 mt-10 bg-site-info">
            <div className=" gap-18 p-4 flex  items-center justify-between">
                <div className="flex gap-8">
                    {siteInfo.map((info, index) => (
                        <InfoCard key={index} title={info.title} icon={info.icon}/>
                    ))}
                </div>
                <div>
                    <h1 className="text-lg w-3/4 lg:text-2xl font-bold text-secondary">با بیش از ده سال سابقه فروش لوازم ورزشی و لباس های ورزشی</h1>
                </div>
            </div>
        </section>
    );
};

export default SiteInfo;