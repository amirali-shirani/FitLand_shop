import React from 'react';
import {FaRegArrowAltCircleLeft} from "react-icons/fa";

type ButtonProps = {
    children: React.ReactNode,
    className?: string;
    onClick?: () => void;
}

const Button = ({className, children, onClick}: ButtonProps) => {
    return (
        <button onClick={onClick} className={`${className} bg-secondary px-3 py-2 flex items-center
             gap-2 hover:scale-110  duration-300 ease-in-out transition-transform
             text-base rounded-xl shadow text-white `}>
            <span> <FaRegArrowAltCircleLeft/></span>
            {children}
        </button>
    );
};

export default Button;