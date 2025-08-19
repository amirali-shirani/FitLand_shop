import {CiShop, CiStar} from "react-icons/ci";
import {AiOutlineLike, AiOutlineThunderbolt} from "react-icons/ai";
import {FaAward, FaRegCalendarAlt,FaHome ,FaPaypal ,FaTruck } from "react-icons/fa";

import offer1 from "@/public/assets/images/home/special-offers/1.jpg"
import offer2 from "@/public/assets/images/home/special-offers/2.jpg"
import offer3 from "@/public/assets/images/home/special-offers/3.jpg"
import shoe1 from "@/public/assets/images/home/latest-shoes/1.jpg"
import shoe2 from "@/public/assets/images/home/latest-shoes/2.jpg"
import shoe3 from "@/public/assets/images/home/latest-shoes/3.jpg"
import bicycle1 from "@/public/assets/images/home/bicycles/2.jpg"
import bicycle2 from "@/public/assets/images/home/bicycles/3jpg.jpg"
import bicycle3 from "@/public/assets/images/home/bicycles/Rectangle 1166.jpg"
import offers1 from "@/public/assets/images/home/offers/offer-pic2.svg";
import offers2 from "@/public/assets/images/home/offers/offer-pic1.svg";
import offers3 from "@/public/assets/images/home/offers/offer-pic3.svg";
import offers4 from "@/public/assets/images/home/offers/offer-pic4.svg";
import news1 from "@/public/assets/images/home/news/1.svg"
import news2 from "@/public/assets/images/home/news/2.svg"


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
        colors: ["amber", "red"],
        image: offer1,
        discount: "VIP"
    },
    {
        title: "ست نایک",
        brand: "S-2000",
        price: 20000,
        sizes: ["L", "XL", 'XXL'],
        colors: ["amber", "red"],
        image: offer2,
        discount: 24
    },
    {
        title: "کفش نایک",
        brand: "S-2000",
        price: 300000,
        sizes: ["L", "XL", 'XXL'],
        colors: ["amber", "red"],
        image: offer3,
        discount: 24
    },
    {
        title: "سویشرت نایک",
        brand: "AO-14",
        price: 300000,
        sizes: ["L", "XL", 'XXL'],
        colors: ["amber", "red"],
        image: offer2,
        discount: "VIP"
    },
]

export const latestShoes = [
    {
        title: "نایک مدل",
        brand: "AO-14",
        price: 300000,
        sizes: ["L", "XL", 'XXL'],
        colors: ["amber", "red"],
        image: shoe1,
        discount: "VIP"
    },
    {
        title: "کفش نایک 2024",
        brand: "",
        price: 20000,
        sizes: ["L", "XL", 'XXL'],
        colors: ["amber", "red"],
        image: shoe2,
        discount: 24
    },
    {
        title: "کفش نایک",
        brand: "S-2000",
        price: 300000,
        sizes: ["L", "XL", 'XXL'],
        colors: ["amber", "red"],
        image: shoe3,
        discount: 24
    },
    {
        title: "کفش نایک 2024",
        brand: "",
        price: 20000,
        sizes: ["L", "XL", 'XXL'],
        colors: ["amber", "red"],
        image: shoe2,
        discount: 24
    },
]

export const bicycles = [
    {
        title: "اسکوتر مدل",
        brand: "A-155",
        price: 300000,
        sizes: ["L", "XL", 'XXL'],
        colors: ["amber", "red"],
        image: bicycle1,
        discount: "VIP"
    },
    {
        title: "دوچرخه مدل",
        brand: "S-2000",
        price: 200000,
        sizes: ["L", "XL", 'XXL'],
        colors: ["amber", "red"],
        image: bicycle2,
        discount: 24
    },
    {
        title: "دوچرخه مدل",
        brand: "S-2000",
        price: 300000,
        sizes: ["L", "XL", 'XXL'],
        colors: ["amber", "red"],
        image: bicycle3,
        discount: 24
    },
    {
        title: "کفش نایک 2024",
        brand: "",
        price: 20000,
        sizes: ["L", "XL", 'XXL'],
        colors: ["amber", "red"],
        image: bicycle2,
        discount: 24
    },
]

export const offersData = [
    {image: offers1, brand: "نایک"},
    {image: offers2, brand: "پوما"},
];
export const secondOffersData = [
    {image: offers3, brand: "نایک"},
    {image: offers4, brand: "پوما"},
];

export const news = [
    {
        image: news1,
        title:
        "شکست استرالیا در گام نخست جام جهانی فوتبال زنان!"
        ,
        description: "تیم‌ها در روز اول مسابقات جام جهانی فوتبال زنان در شهر مادرید اسپانیا با یکدیگر به رقابت پرداختند.",
        link: "/news/1"
    }, {
        image: news2,
        title:
        "شکست استرالیا در گام نخست جام جهانی فوتبال زنان!",
        description: "تیم‌ها در روز اول مسابقات جام جهانی فوتبال زنان در شهر مادرید اسپانیا با یکدیگر به رقابت پرداختند.",
        link: "/news/1"
    }
]

export const siteInfo = [
    {title : "پرداخت درب منزل" , icon : <FaHome/>},
    {title : "پرداخت قسطی" , icon : <FaPaypal/>},
    {title : "ارسال سریع" , icon : <FaTruck/>},
]