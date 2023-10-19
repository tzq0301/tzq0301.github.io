import Link from "next/link";
import React from "react";

export default function UrlLink({url, bold = true, underline = true, children}: { url: string, bold?: boolean, underline?: boolean, children: React.ReactNode }) {
    return (
        <Link
            className={`${bold ? 'font-bold' : ''} ${underline ? 'underline underline-offset-[5px] decoration-black/60 decoration-1' : ''} text-black hover:text-orange-400 duration-300`}
            href={url}>
            {children}
        </Link>
    )
}