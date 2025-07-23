import Link from "next/link";
import {IoBasketSharp, IoPersonOutline} from "react-icons/io5";

const NavActions = () => (
    <div className="hidden lg:flex items-center gap-4">
        <Link href="/login">
            <button
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition-colors">
                <IoPersonOutline className="text-xl"/>
                <span>ثبت نام | ورود</span>
            </button>
        </Link>
        <button
            className="bg-primary text-white size-12 flex justify-center items-center text-3xl rounded-lg hover:opacity-90 transition-opacity">
            <IoBasketSharp/>
        </button>
    </div>
);
export default NavActions;