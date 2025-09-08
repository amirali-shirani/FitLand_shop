import React from "react";
import Image from "next/image";
import namad1 from "@/public/assets/images/footer/namad/01.svg";
import namad2 from "@/public/assets/images/footer/namad/02.svg";
import namad3 from "@/public/assets/images/footer/namad/03 1.svg";

const images = [namad1, namad2, namad3];

    const FooterAboutUs = () => {
        return (
            <section className="container mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <article className="space-y-3 leading-6">
                    <h2 className="text-base font-semibold">فروشگاه اینترنتی فیت‌لند</h2>
                    <p className="text-sm  text-justify">
                        فروشگاه لوازم ورزشی فیت‌لند در سال 1403 کار خود را به صورت حرفه ای آغاز کرد و با هدف ارائه جدیدترین
                        محصولات ورزشی از قبیل لوازم فوتبال، فوتسال، والیبال، بسکتبال، تنیس و... همچنین پوشاک ورزشی و تجهیزات
                        سفر، از برند های معتبر دنیا در محیطی کاربرپسند، قابل اطمینان و با مجربترین مشاوران و کارشناسان ورزشی
                        فعالیت می کند. فروشگاه فیت‌لند دارای نماد اعتماد از وزارت صنعت معدن و تجارت می باشد و تمامی محصولات
                        خود را با 7 روز ضمانت بازگشت همراه با گارانتی اصالت و سلامت فیزیکی، با سریع ترین روش های ارسال به
                        سراسر ایران در اختیار مشتریان خود قرار می دهد.
                    </p>
                </article>

                <div className="flex flex-col items-end space-y-4">
                    <div className="flex gap-4">
                        {images.map((image, index) => (
                            <Image
                                key={index}
                                alt={`نماد اعتماد ${index + 1}`}
                                src={image}
                                width={80}
                                height={80}
                                className="object-contain"
                            />
                        ))}
                    </div>
                    <h3 className="text-sm font-medium">
                         یک هفته ضمانت بازگشت ✍
                    </h3>
                </div>
            </section>
        );
    };

export default FooterAboutUs;
