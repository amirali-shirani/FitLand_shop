"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { MainMenu, MobileMenu, NavActions, SearchBar, TopBanner } from "./index";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // توابع جداگانه برای خوانایی بیشتر
    const handleMenuOpen = () => setIsMenuOpen(true);
    const handleMenuClose = () => setIsMenuOpen(false);

    return (
        <>
            <TopBanner />
            {/* هدر را sticky می‌کنیم تا در اسکرول بالای صفحه بماند */}
            <header className="sticky top-0 z-40 bg-white shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* آیکون همبرگر منو برای موبایل */}
                        <div className="lg:hidden">
                            <button onClick={handleMenuOpen} className="text-3xl text-gray-700">
                                <MdMenu />
                            </button>
                        </div>

                        {/* لوگو */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="flex flex-col items-start">
                                <Image src="/assets/images/logo.svg" alt="Fitland Logo" width={140} height={45} />
                                <span className="hidden sm:block text-gray-500 text-xs mt-1">
                                    فروشگاه لوازم ورزشی فیت‌لند
                                </span>
                            </Link>
                        </div>

                        {/* سرچ بار فقط برای دسکتاپ */}
                        <div className="hidden lg:flex flex-1 justify-center px-8">
                            <SearchBar className="max-w-xl" />
                        </div>

                        {/* دکمه‌های اکشن (سبد خرید، پروفایل) */}
                        <NavActions />
                    </div>
                </div>
            </header>

            {/* کامپوننت منوی موبایل که فقط در صورت نیاز نمایش داده می‌شود */}
            <MobileMenu isOpen={isMenuOpen} onClose={handleMenuClose} />

            {/* منوی اصلی فقط برای دسکتاپ */}
            <div className="hidden lg:block border-t">
                <MainMenu />
            </div>
        </>
    );
};

export default Navbar;