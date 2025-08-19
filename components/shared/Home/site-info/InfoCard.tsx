import React from 'react';

type InfoCardProps = {
    title: string;
    icon: React.ReactNode;
}
const InfoCard = ({icon, title}: InfoCardProps) => {
    return (
        <div className="w-36 h-36 flex-col  shadow-lg gap-5 bg-white rounded-xl flex justify-center items-center">
            <div className="text-blue-secondary text-4xl">{icon}</div>
            <h3 className="text-lg text-secondary font-semibold">{title}</h3>
        </div>
    );
};

export default InfoCard;