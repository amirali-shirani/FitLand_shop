// src/components/shared/Footer/Footer.jsx

import React from 'react';
import Link from 'next/link';
import {footerLinks} from "@/lib/data";
import FooterCol from "@/components/shared/Footer/FooterCol";
import {FaInstagram, FaTelegramPlane, FaWhatsapp, FaYoutube} from "react-icons/fa";
import FooterContactUs from "@/components/shared/Footer/FooterContactUs";

const Footer = () => {
    return (
        <footer dir="rtl" className="p-8 md:p-12 text-white bg-slate-900">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-10">

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

            <div className="container mx-auto mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
                <p>&copy; ۲۰۲۵ - تمامی حقوق برای فروشگاه فیت‌لند محفوظ است.</p>
            </div>
        </footer>
    );
};

export default Footer;