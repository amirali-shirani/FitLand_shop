import React from 'react';
import {MdOutlineSecurity} from "react-icons/md";
import {FaBuilding, FaCode} from "react-icons/fa";

const FooterCopyRight = () => {
    return (
        // پس‌زمینه تیره‌تر برای تمایز
        <div className="bg-gray-900 py-4">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left text-xs text-gray-500">
                    <p className="flex items-center gap-2 mb-2 sm:mb-0">
                        <MdOutlineSecurity className="text-base" />
                        <span>تمامی حقوق مادی و معنوی این وب‌سایت برای فیت‌لند محفوظ است. © 1403</span>
                    </p>
                    <p className="flex items-center gap-2">
                        <FaCode className="text-base" />
                        <span>طراحی و توسعه: امیرعلی شیرانی</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FooterCopyRight;