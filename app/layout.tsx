

import "./globals.css";
import {Metadata} from "next";
import {ReactNode} from "react";

export const metadata : Metadata = {
    title: "فروشپاه فیت لند",
    description: "کیفیت را در کنار ما تجربه کنید",
};

export default function RootLayout({children} : Readonly<{children:ReactNode;}>) {
    return (
        <html lang="fa-IR" dir="rtl">
        <body>
        {children}
        </body>
        </html>
    );
}
