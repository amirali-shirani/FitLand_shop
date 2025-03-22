import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
    return (<nav className="container bg-gray-300 ">
        <div>
            <Link href="/" className="flex flex-col gap-2">
                <Image src="./assets/images/logo.svg" className="object-cover" alt="logo" width={170} height={100}/>

                <span className="text-[#868686] text-sm">
فروشگاه لوازم ورزشی فیت‌لند
                </span>
            </Link>
        </div>
    </nav>);
};

export default NavBar;