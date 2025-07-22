import Link from 'next/link';
import React from 'react';

type HeaderProps = {
    title: string,
    link: string,
}

const MenuLink = ({title, link}: HeaderProps) => {
    return (
        <Link href={link}>
            <h6 className=" lg:text-lg hover:scale-110 duration-300 text-sm">
                {title}
            </h6>
        </Link>
    );
};

export default MenuLink;