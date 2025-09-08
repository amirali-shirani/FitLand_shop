import React from 'react';
import {footerLinks} from "@/lib/data";
import FooterCol from "@/components/shared/Footer/FooterCol";
import FooterContactUs from "@/components/shared/Footer/FooterContactUs";
import FooterAboutUs from "@/components/shared/Footer/FooterAboutUs";
import FooterCopyRight from "@/components/shared/Footer/FooterCopyRight";

const Footer = () => {
    return (
        // استفاده از پالت رنگی تیره‌تر برای پس‌زمینه
        <footer className="bg-gray-800 text-gray-300">
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* بخش لینک‌ها با عرض بیشتر */}
                    <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
                        {footerLinks.map((footerLink, index) => (
                            <FooterCol
                                key={index}
                                title={footerLink.title}
                                subtitles={footerLink.subTitles}
                            />
                        ))}
                    </div>
                    {/* بخش تماس با ما */}
                    <div className="md:col-span-5">
                        <FooterContactUs />
                    </div>
                </div>
                {/* بخش درباره ما با یک خط جداکننده در بالا */}
                <FooterAboutUs />
            </div>
            {/* بخش کپی‌رایت با پس‌زمینه متفاوت برای تمایز */}
            <FooterCopyRight />
        </footer>
    );
};

export default Footer;