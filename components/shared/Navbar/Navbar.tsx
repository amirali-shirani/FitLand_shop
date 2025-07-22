"use client";
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {MdMenu} from "react-icons/md";
import {Header, MobileMenu, NavActions, SearchBar, TopBanner} from "./index";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <TopBanner/>

            <header className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex flex-col items-start">
                            <Image src="/assets/images/logo.svg" alt="Fitland Logo" width={150} height={50}/>
                            <span className="text-gray-500 text-xs mt-1">
                                فروشگاه لوازم ورزشی فیت‌لند
                            </span>
                        </Link>
                    </div>

                    <SearchBar className="hidden lg:block flex-1 max-w-xl mx-8"/>
                    <NavActions/>

                    <div className="lg:hidden">
                        <button onClick={() => setIsMenuOpen(true)} className="text-3xl">
                            <MdMenu/>
                        </button>
                    </div>
                </div>
            </header>

            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}/>
            <div className="text-center flex justify-center">
                <SearchBar className="lg:hidden flex-1 max-w-xl mx-8 "/>
            </div>
            <Header/>
        </>
    );
};

export default Navbar;