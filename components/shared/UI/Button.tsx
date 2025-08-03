import Link from 'next/link';
import React from 'react';
import {FaRegArrowAltCircleLeft} from "react-icons/fa";

type ButtonProps = {
    link: string,
    children: React.ReactNode,
    className?: string;
    onClick?: () => void;
}

const Button = ({className, link, children, onClick}: ButtonProps) => {
    return (
        <Link href={link} className="">
            <button onClick={onClick} className={`${className} bg-secondary px-3 py-2 flex items-center
             gap-2 hover:scale-110  duration-300 ease-in-out transition-transform
             text-base rounded-xl shadow text-white `}>
            <span> <FaRegArrowAltCircleLeft/></span>
                {children}
            </button>
        </Link>
    );
};

export default Button;