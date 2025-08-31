import React from 'react';

const Footer = () => {
    return (
        <footer className="p-5  gap-8 text-white bg-footer-secondary ">
            <div className="container mx-auto grid grid-cols-5 p-5">

            <div className="col-span-3 flex  justify-between  gap-4">
                <div>
                    <h3>محبوب ترین ها</h3>
                    <ul>
                        <li>لباس مردانه</li>
                    </ul>
                </div> <div>
                    <h3>محبوب ترین ها</h3>
                    <ul>
                        <li>لباس مردانه</li>
                    </ul>
                </div> <div>
                    <h3>محبوب ترین ها</h3>
                    <ul>
                        <li>لباس مردانه</li>
                    </ul>
                </div> <div>
                    <h3>محبوب ترین ها</h3>
                    <ul>
                        <li>لباس مردانه</li>
                    </ul>
                </div>
            </div>
            <div className="col-span-2">
                <h2>برای دریافت تخفیف های بیشتر ما را دنبال کنید!</h2>
                <div className=""></div>
            </div>
            </div>

        </footer>
    );
};

export default Footer;