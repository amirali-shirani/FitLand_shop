import Link from 'next/link';
import React from 'react';

type FooterColProps = {
    title: string;
    subtitles: { title: string; subtitle?: string; link?: string }[];
};



const FooterCol = ({ title, subtitles }: FooterColProps) => {
    return (
        <div>
            {/* استایل بهتر برای عنوان ستون */}
            <h3 className="text-base font-bold text-white mb-5 uppercase tracking-wider">{title}</h3>
            <ul className="space-y-3">
                {subtitles.map((sub, index) => (
                    <li key={index}>
                        {sub.link ? (
                            <Link href={sub.link} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2">
                                {/* نشانگر دایره‌ای برای لینک‌ها */}
                                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                {sub.title}
                            </Link>
                        ) : (
                            <div className="text-sm text-gray-400">
                                {sub.title}: <span className="text-white font-medium">{sub.subtitle}</span>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default FooterCol;