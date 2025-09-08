import React from 'react';
import {footerLinks} from "@/lib/data";
import FooterCol from "@/components/shared/Footer/FooterCol";
import FooterContactUs from "@/components/shared/Footer/FooterContactUs";
import FooterAboutUs from "@/components/shared/Footer/FooterAboutUs";
import FooterCopyRight from "@/components/shared/Footer/FooterCopyRight";

const Footer = () => {
    return (
        <footer className=" text-white bg-footer-secondary">
            <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-10">
                <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8">
                    {footerLinks.map((footerLink, index) => (
                        <FooterCol
                            key={index}
                            title={footerLink.title}
                            subtitles={footerLink.subTitles}
                        />
                    ))}
                </div>
                <div className="lg:col-span-2 lg:col-start-5 flex flex-col">
                    <FooterContactUs/>
                </div>
            </div>
            <FooterAboutUs/>
            <FooterCopyRight/>
        </footer>
    );
};

export default Footer;