import {useEffect} from 'react';
import Link from 'next/link';
import {MdClose} from 'react-icons/md';
import {IoBasketSharp, IoPersonOutline} from 'react-icons/io5';
import {SearchBar} from "@/components/shared/Navbar/index";

const MobileMenu = ({isOpen, onClose}) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            ></div>

            <div
                className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="p-5">
                    <div className="flex justify-between items-center mb-8">
                        <span className="font-bold text-lg">منو</span>
                        <button onClick={onClose} className="text-3xl"><MdClose/></button>
                    </div>

                    <SearchBar className="mb-6"/>

                    <div className="flex flex-col gap-4">
                        <Link href="/login" onClick={onClose}>
                            <button
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm">
                                <IoPersonOutline className="text-xl"/>
                                <span>ثبت نام | ورود</span>
                            </button>
                        </Link>
                        <button
                            className="w-full bg-orange text-white py-3 flex justify-center items-center gap-2 text-xl rounded-lg">
                            <IoBasketSharp className="text-2xl"/>
                            <span>سبد خرید</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;