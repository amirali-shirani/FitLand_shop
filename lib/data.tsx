import { CiStar ,CiShop} from "react-icons/ci";
import { AiOutlineThunderbolt ,AiOutlineLike } from "react-icons/ai";
import { FaAward ,FaRegCalendarAlt } from "react-icons/fa";

export const headLinks =[
    {title : "مردانه" , link : "/"},
    {title : "زنانه" , link : "/"},
    {title : "بچگانه" , link : "/"},
    {title : "لوازم ورزشی" , link : "/"},
    {title : "شیکر و جاگر" , link : "/"},
]
export const headFeatures = [
    {title : "جدید ترین محصولات" , link : "/" , icon : <CiStar/>},
    {title : "تخفیفات ویژه" , link : "/" , icon :<AiOutlineThunderbolt/> },
    {title : "پرفروش ترین ها" , link : "/" , icon : <FaAward/>},
]

export const heroInfos = [
    {title : "محصولات متنوع" , number : "+ 300" , icon : <CiShop/>},
    {title : "رضایت مشتری" , number : "۹۵ %" , icon : <AiOutlineLike/>},
    {title : "از خرید تا دریافت" , number : "۴ روز" , icon : <FaRegCalendarAlt/>},
]