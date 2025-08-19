import {
    Banner,
    Bicycles,
    CampBanner,
    HeroSection,
    LatestShoes,
    Navbar,
    OfferSection,
    SiteInfo,
    SpecialOffers,
    LatestNews
} from "@/components/shared/Home";
import BannerHome from '@/public/assets/images/home/banner.png';
import BannerHome2 from '@/public/assets/images/home/banner2.jpg';
import {offersData, secondOffersData} from "@/lib/data";

const App = () => {
    return (<>
            <Navbar/>
            <HeroSection/>
            <OfferSection title="جدید ترین محصولات" desc="جدید ترین محصولات با ارسال رایگان تهیه
کنید و در سریع ترین زمان درب منزل تحویل بگیرید" link="/latest-products" data={offersData}/>
            <Banner title="برای حال خوب" subTitle="لوازم ایروبیک و تناسب اندام بگیر" image={BannerHome}
                    link="/products"/>
            <SpecialOffers/>
            <LatestShoes/>
            <Banner title="برای لذت بردن از مسیر " subTitle="دوچرخه، اسکیت و  اسکوتر بگیر" image={BannerHome2}
                    link="/products"/>
            <Bicycles/>
            <OfferSection title="پر فروش ترین محصولات" desc="پرفروش ترین محصولات با ارسال رایگان تهیه
کنید و در سریع ترین زمان درب منزل تحویل بگیرید." link="/most-products" data={secondOffersData}/>
            <CampBanner/>
            <LatestNews/>
            <SiteInfo/>
        </>
    );
};

export default App;