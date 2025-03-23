import Image from "next/image";
import Link from "next/link";
import {CiSearch} from "react-icons/ci";
import {IoPersonOutline, IoBasketSharp} from "react-icons/io5";

const NavBar = () => {
    return (<>
        <div>
            <h3 className="font-semibold text-center p-2.5 text-white bg-free-send">با عضویت در فیت لند اولین ارسال
                را
                مهمون ما باش
                :)</h3>
        </div>
        <nav>
            <div className="container flex justify-between items-center my-4">
                <div>
                    <Link href="/">
                        <Image src="./assets/images/logo.svg" className="object-cover" alt="logo" width={170}
                               height={100}/>

                        <span className="text-[#868686] text-sm">
                        فروشگاه لوازم ورزشی فیت‌لند
                </span>
                    </Link>
                </div>
                <div>
                    <div className='relative'>
                        <input type="text" placeholder="جستجو..." name="search" className="px-10 py-2.5
                         border border-gray-400 bg-[#F9F9F9] focus:ring-1 outline-none focus:ring-gray-500
                         rounded-lg w-[638px]"/>
                        <span className="absolute top-2 right-2 text-3xl text-orange text-black"><CiSearch/></span>
                    </div>
                </div>
                <div className="flex gap-4 justify-center items-center">
                    <Link href="/login">
                        <button
                            className="p-2 flex border border-gray-300 justify-center items-center gap-2 text-lg py-2 rounded-2xl
                             shadow-md">
                            ثبت نام | ورود <span><IoPersonOutline/></span>
                        </button>
                    </Link>
                    <button
                        className="p-1 text-white bg-orange size-12 flex justify-center items-center gap-2 text-3xl rounded-lg ">
                        <IoBasketSharp/>
                    </button>
                </div>
            </div>
        </nav>
    </>);
};

export default NavBar;