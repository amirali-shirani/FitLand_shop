import React from 'react';
import {MdOutlineSecurity} from "react-icons/md";
import {FaBuilding} from "react-icons/fa";

const FooterCopyRight = () => {
    return (
        <div className="border-t-2">

        <div className="container border-t-[#CBCBCB]">
            <div className="flex justify-between p-3 text-[10px] text-[#606060]">
                <p className="flex gap-2"><span><MdOutlineSecurity/></span>تمامی حقوق مادی و معنوی این
                    وب‌سایت برای مجموعه فیت‌لند محفوظ می‌باشد.</p>
                <p className="flex gap-2"><span><FaBuilding/></span>برنامه نویس : امیرعلی شیرانی</p>
            </div>
        </div>
        </div>
    );
};

export default FooterCopyRight;