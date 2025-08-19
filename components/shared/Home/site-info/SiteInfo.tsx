import React from 'react';
import {siteInfo} from "@/lib/data";
import InfoCard from "@/components/shared/Home/site-info/InfoCard";

const SiteInfo = () => {
    return (
        <section className="container mt-20 bg-light-secondary">
            <div className="grid grid-cols-2 p-4 justify-items-center items-center">
                <div className="flex gap-4">
                    {siteInfo.map((info, index) => (
                        <InfoCard key={index} title={info.title} icon={info.icon}/>
                    ))}
                </div>
                <div>
                    <h1 className="text-lg lg:text-2xl font-bold w-2/3 text-secondary">با بیش از ده سال سابقه فروش لوازم ورزشی و لباس های ورزشی</h1>
                </div>
            </div>
        </section>
    );
};

export default SiteInfo;