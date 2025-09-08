"use client";
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {MdMenu} from "react-icons/md";
import {MainMenu, MobileMenu, NavActions, SearchBar, TopBanner} from "./index";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuOpen = () => setIsMenuOpen(true);
    const handleMenuClose = () => setIsMenuOpen(false);

    return (
        <>
            <TopBanner/>
            <header className="sticky top-0 z-40 bg-white ">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="lg:hidden">
                            <button onClick={handleMenuOpen} className="text-3xl text-gray-700">
                                <MdMenu/>
                            </button>
                        </div>

                        <div className="flex-shrink-0">
                            <Link href="/" className="flex flex-col items-start">
                                <Image src="/assets/images/logo.svg" alt="Fitland Logo" width={140} height={45}/>
                                <span className="hidden sm:block text-gray-500 text-xs mt-1">
                                    فروشگاه لوازم ورزشی فیت‌لند
                                </span>
                            </Link>
                        </div>

                        <div className="hidden lg:flex flex-1 justify-center px-8">
                            <SearchBar/>
                        </div>
                        <NavActions/>
                    </div>
                </div>
            </header>

            <MobileMenu isOpen={isMenuOpen} onClose={handleMenuClose}/>
            <div className="hidden lg:block ">
                <MainMenu/>
            </div>
        </>
    );
};

export default Navbar;