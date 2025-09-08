import React from 'react';

type InfoCardProps = {
    title: string;
    icon: React.ReactNode;
}

const InfoCard = ({icon, title}: InfoCardProps) => {
    return (
        <div className="flex flex-col items-center justify-start gap-3
                       w-28 sm:w-32  // عرض بهینه و ریسپانسیو برای هر کارت
                       p-4 bg-white rounded-2xl shadow-sm border border-gray-200">

            <div className="text-blue-secondary text-4xl">{icon}</div>
            <h3 className="text-sm text-gray-800 font-semibold text-center h-12 flex items-center justify-center">
                {title}
            </h3>
        </div>
    );
};

export default InfoCard;