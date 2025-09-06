import React from 'react';
import Link from "next/link";
import {FaInstagram, FaTelegramPlane, FaWhatsapp, FaYoutube} from "react-icons/fa";

const FooterContactUs = () => {
    return (
        <div className="">
            <div>
                <h3 className="font-bold text-lg mb-4">برای دریافت تخفیف های بیشتر ما را دنبال کنید!</h3>
                <div className="flex gap-16 my-7 text-3xl">
                    <Link href="#" aria-label="Instagram"
                          className="hover:text-gray-400 transition-colors"><FaInstagram/></Link>
                    <Link href="#" aria-label="Telegram"
                          className="hover:text-gray-400 transition-colors"><FaTelegramPlane/></Link>
                    <Link href="#" aria-label="WhatsApp"
                          className="hover:text-gray-400 transition-colors"><FaWhatsapp/></Link>
                    <Link href="#" aria-label="YouTube"
                          className="hover:text-gray-400 transition-colors"><FaYoutube/></Link>
                </div>
            </div>
            <div>
                <h3 className="font-bold text-lg mb-4">خبرنامه فیت‌لند</h3>
                <form className="relative">
                    <input
                        type="email"
                        placeholder="ایمیل خود را وارد کنید..."
                        className="w-full bg-transparent border border-gray-600 rounded-md py-3 px-4
                                 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                    />
                    <button
                        type="submit"
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary text-white px-4
                                py-1.5 rounded-md hover:bg-orange-600 transition-colors"
                    >
                        ثبت
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FooterContactUs;