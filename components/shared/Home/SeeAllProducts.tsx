import React from 'react';
import Link from "next/link";
import {FaRegArrowAltCircleLeft} from "react-icons/fa";

const SeeAllProducts = ({link}: { link: string }) => {
    return (
        <Link href={link} className="lg:block hidden">
            <h4 className="text-xl flex justify-end items-center gap-3 lg:px-10 px-5">
                <span><FaRegArrowAltCircleLeft/></span> مشاهده همه </h4>
        </Link>
    );
};

export default SeeAllProducts;