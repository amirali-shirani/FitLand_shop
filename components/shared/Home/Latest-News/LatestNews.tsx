    import React from 'react';
    import {news} from "@/lib/data";
    import NewsCard from "@/components/shared/Home/Latest-News/NewsCard";

    const LatestNews = () => {
        return (
            <section className='container mt-10'>
                <h1 className="lg:text-3xl text-xl font-bold text-center">جدیدترین ها در اخبار ورزش</h1>
                <div className="grid grid-cols-2 gap-8 mt-10">
                    {news.map((n, index) => (
                        <NewsCard
                            key={index}
                            title={n.title}
                            description={n.description}
                            link={n.link}
                            image={n.image}
                        />
                    ))}

                </div>
            </section>
        );
    };

    export default LatestNews;