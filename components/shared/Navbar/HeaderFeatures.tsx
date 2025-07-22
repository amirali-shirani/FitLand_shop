import React from 'react';
import Link from "next/link";


type HeaderProps = {
    title: string;
    link: string;
    icon: React.ReactNode;
}

const HeaderFeatures = ({title, icon, link}: HeaderProps) => {
    return (
        <Link href={link} className="flex items-center gap-1 hover:scale-110 duration-300">
            <span className="text-xl text-orange">{icon}</span>
            <h6 className="lg:text-lg text-sm">{title}</h6>
        </Link>
    );
};

export default HeaderFeatures;