import Link from "next/link";
import React from "react";

export default function UrlLink({url, bold = true, underline = true, fontSize = 'text-base', children}: {
    url: string,
    bold?: boolean,
    underline?: boolean,
    fontSize?: string,
    children: React.ReactNode
}) {
    return (
        <Link
            className={`${fontSize} ${bold ? 'font-bold' : ''} ${underline ? 'underline underline-offset-[5px] decoration-black/60 decoration-1' : ''} text-black hover:text-orange-400 duration-300`}
            href={url} scroll={false}>
            {children}
        </Link>
    )
}