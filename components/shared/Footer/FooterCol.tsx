import Link from 'next/link';
import React from 'react';

type FooterColProps = {
    title: string;
    subtitles: { title: string; subtitle?: string; link?: string }[];
};



const FooterCol = ({title, subtitles}: FooterColProps) => {
    return (
            <div>
                <h3 className="font-semibold mb-4">{title}</h3>
                <ul className="list-disc space-y-6">
                    {subtitles.map((sub,index) => (
                        <div key={index}>
                            {sub.link ? <Link key={index} href={sub.link} target="_blank" rel="noopener noreferrer">
                                <li className="text-sm" key={index}>{sub.title}</li>
                            </Link> : <li className="text-sm text-nowrap" key={index}>{sub.title} <span className="text-primary">{sub.subtitle}</span></li>}
                        </div>

                    ))}
                </ul>
            </div>
    );
};

export default FooterCol;