import {CiShop, CiStar} from "react-icons/ci";
import {AiOutlineLike, AiOutlineThunderbolt} from "react-icons/ai";
import {FaAward, FaRegCalendarAlt} from "react-icons/fa";
import offer1 from "@/public/assets/images/special-offers/1.jpg"
import offer2 from "@/public/assets/images/special-offers/2.jpg"
import offer3 from "@/public/assets/images/special-offers/3.jpg"
import shoe1 from "@/public/assets/images/latest-shoes/1.jpg"
import shoe2 from "@/public/assets/images/latest-shoes/2.jpg"
import shoe3 from "@/public/assets/images/latest-shoes/3.jpg"

export const headLinks = [
    {title: "مردانه", link: "/"},
    {title: "زنانه", link: "/"},
    {title: "بچگانه", link: "/"},
    {title: "لوازم ورزشی", link: "/"},
    {title: "شیکر و جاگر", link: "/"},
]
export const headFeatures = [
    {title: "جدید ترین محصولات", link: "/", icon: <CiStar/>},
    {title: "تخفیفات ویژه", link: "/", icon: <AiOutlineThunderbolt/>},
    {title: "پرفروش ترین ها", link: "/", icon: <FaAward/>},
]

export const heroInfos = [
    {title: "محصولات متنوع", number: "+ 300", icon: <CiShop/>},
    {title: "رضایت مشتری", number: "۹۵ %", icon: <AiOutlineLike/>},
    {title: "از خرید تا دریافت", number: "۴ روز", icon: <FaRegCalendarAlt/>},
]

export const specialOffers = [
    {
        title: "سویشرت نایک",
        brand: "AO-14",
        price: 300000,
        sizes: ["L", "XL", 'XXL'],
        colors: ["amber" , "red"],
        image: offer1,
        discount : "VIP"
    },
    {
        title: "ست نایک",
        brand: "S-2000",
        price: 20000,
        sizes: ["L", "XL", 'XXL'],
        colors: ["amber" , "red"],
        image: offer2,
        discount : 24
    },
    {
        title: "کفش نایک",
        brand: "S-2000",
        price: 300000,
        sizes: ["L", "XL", 'XXL'],
        colors: ["amber" , "red"],
        image: offer3,
        discount : 24
    },
    {
        title: "سویشرت نایک",
        brand: "AO-14",
        price: 300000,
        sizes: ["L", "XL", 'XXL'],
        colors: ["amber" , "red"],
        image: offer2,
        discount : "VIP"
    },
]

export const latestShoes = [
    {
        title: "نایک مدل",
        brand: "AO-14",
        price: 300000,
        sizes: ["L", "XL", 'XXL'],
        colors: ["amber" , "red"],
        image: shoe1,
        discount : "VIP"
    },
    {
        title: "کفش نایک 2024",
        brand: "",
        price: 20000,
        sizes: ["L", "XL", 'XXL'],
        colors: ["amber" , "red"],
        image: shoe2,
        discount : 24
    },
    {
        title: "کفش نایک",
        brand: "S-2000",
        price: 300000,
        sizes: ["L", "XL", 'XXL'],
        colors: ["amber" , "red"],
        image: shoe3,
        discount : 24
    },
    {
        title: "کفش نایک 2024",
        brand: "",
        price: 20000,
        sizes: ["L", "XL", 'XXL'],
        colors: ["amber" , "red"],
        image: shoe2,
        discount : 24
    },
]