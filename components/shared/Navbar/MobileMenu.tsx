"use client"
import {useEffect} from 'react';
import Link from 'next/link';
// ... (بقیه import ها)
import Image from "next/image";
import {IoBasketSharp, IoCallOutline, IoHomeOutline, IoPersonOutline, IoStorefrontOutline} from 'react-icons/io5';
import SearchBar from './SearchBar';
import {MdClose} from "react-icons/md";

// ... (Props و navLinks بدون تغییر)
type MobileMenuProps = {
    isOpen: boolean;
    onClose: () => void;
};

const navLinks = [
    {title: 'صفحه اصلی', href: '/', icon: <IoHomeOutline/>},
    {title: 'فروشگاه', href: '/products', icon: <IoStorefrontOutline/>},
    {title: 'تماس با ما', href: '/contact', icon: <IoCallOutline/>},
];


const MobileMenu = ({isOpen, onClose}: MobileMenuProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    // **تغییری در این بخش نیست**
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
            {/* پس‌زمینه نیمه‌شفاف */}
            <div
                className="fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300"
                onClick={onClose}
            ></div>

            {/* پنل اصلی منو با کلاس‌های Tailwind برای انیمیشن */}
            <div
                className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-xl flex flex-col 
                            transition-transform duration-300 ease-in-out 
                            ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} // <-- **تغییر کلیدی**
            >
                {/* هدر و محتوای منو بدون تغییر باقی می‌ماند */}
                <div className="flex justify-between items-center p-4 border-b">
                    <Link href="/" onClick={onClose}>
                        <Image src="/assets/images/logo.svg" alt="Fitland Logo" width={100} height={35}/>
                    </Link>
                    <button onClick={onClose} className="text-3xl text-gray-500 hover:text-gray-800">
                        <MdClose/>
                    </button>
                </div>

                <div className="flex-grow p-4 overflow-y-auto">
                    {/* ... محتوای داخلی منو ... */}
                    <SearchBar className="mb-6"/>
                    <nav className="border-b pb-6 mb-6">
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.title}>
                                    <Link
                                        href={link.href}
                                        onClick={onClose}
                                        className="flex items-center gap-4 p-3 text-lg text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                                    >
                                        <span className="text-2xl text-primary">{link.icon}</span>
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="space-y-3">
                        <Link
                            href="/login"
                            onClick={onClose}
                            className="flex items-center gap-3 w-full p-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                            <IoPersonOutline className="text-xl"/>
                            <span>ثبت نام | ورود به حساب</span>
                        </Link>
                        <Link
                            href="/cart"
                            onClick={onClose}
                            className="flex items-center gap-3 w-full p-3 text-white bg-primary rounded-lg hover:bg-orange-600 transition-colors"
                        >
                            <IoBasketSharp className="text-2xl"/>
                            <span>سبد خرید</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;