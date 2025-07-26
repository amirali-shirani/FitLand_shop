import React from 'react';

type heroProps = {
    title: string;
    number: string;
    icon: React.ReactNode;

}
const HeroInfo = ({title, number, icon} : heroProps) => {
    return (
        <div className="flex items-center gap-4">
            <div className="text-3xl flex justify-center items-center rounded-2xl bg-[#EBF5FF] w-[70px] h-[70px]">{icon}</div>
            <div className="text-xl">
                <h5 className="text-secondary">{number}</h5>
                <h4 className="text-custom-neutral text-base">{title}</h4>
            </div>
        </div>
    );
};

export default HeroInfo;