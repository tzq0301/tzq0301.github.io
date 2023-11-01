import Link from "next/link";
import React from "react";

export default function UrlLink({
                                    url,
                                    bold = true,
                                    underline = true,
                                    native = false,
                                    fontSize = 'text-base',
                                    children
                                }: {
    url: string,
    bold?: boolean,
    underline?: boolean,
    native?: boolean,
    fontSize?: string,
    children: React.ReactNode
}) {
    let className = `${fontSize} ${bold ? 'font-bold' : ''} ${underline ? 'underline underline-offset-[5px] decoration-black/60 decoration-1' : ''} text-black hover:text-orange-400 duration-300`;

    let link = native ?
        (
            <a className={className} href={url}>{children}</a>
        ) :
        (
            <Link
                className={className}
                href={url}>
                {children}
            </Link>
        );

    return (
        link
    )
}