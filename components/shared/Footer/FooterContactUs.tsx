import React from 'react';
import Link from "next/link";
import {FaInstagram, FaTelegramPlane, FaWhatsapp, FaYoutube} from "react-icons/fa";

const FooterContactUs = () => {
    return (
        <div className="space-y-10">
            <div>
                <h3 className="font-bold text-base text-white mb-3 uppercase tracking-wider">ما را دنبال کنید!</h3>
                <p className="text-sm text-gray-400 mb-5">برای دریافت کد تخفیف و اطلاع از جدیدترین محصولات.</p>
                <div className="flex gap-5 text-2xl">
                    {/* افکت هاور برای آیکون‌های اجتماعی */}
                    <Link href="#" aria-label="Instagram" className="text-gray-400 hover:text-pink-500 transition-all duration-300 transform hover:-translate-y-1"><FaInstagram /></Link>
                    <Link href="#" aria-label="Telegram" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1"><FaTelegramPlane /></Link>
                    <Link href="#" aria-label="WhatsApp" className="text-gray-400 hover:text-green-500 transition-all duration-300 transform hover:-translate-y-1"><FaWhatsapp /></Link>
                    <Link href="#" aria-label="YouTube" className="text-gray-400 hover:text-red-600 transition-all duration-300 transform hover:-translate-y-1"><FaYoutube /></Link>
                </div>
            </div>
            <div>
                <h3 className="font-bold text-base text-white mb-3 uppercase tracking-wider">عضویت در خبرنامه</h3>
                <form className="flex">
                    <input
                        type="email"
                        placeholder="ایمیل خود را وارد کنید"
                        className="w-full bg-gray-700 border border-gray-600 rounded-r-md py-2.5 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <button
                        type="submit"
                        className="bg-primary text-white px-6 py-2.5 rounded-l-md hover:bg-orange-600 transition-colors duration-300 font-semibold"
                    >
                        ثبت
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FooterContactUs;