import React from 'react';
import {headLinks , headFeatures} from "@/lib/data";
import {HeaderFeatures, HeadLink} from "./index";

const Header = () => {
    return (
        <div className="container mx-auto mt-5  ">
            <div className="bg-gray-200 py-4 rounded-xl px-6 lg:flex lg:justify-between hidden">
                <div className="flex items-center  gap-6">
                    {headLinks.map((link , index) => (
                        <HeadLink key={index} title={link.title} link={link.link}/>
                    ))}
                </div>
                <div className="flex items-center lg:gap-4">
                    {headFeatures.map((link , index) => (
                        <HeaderFeatures icon={link.icon} key={index} title={link.title} link={link.link}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;