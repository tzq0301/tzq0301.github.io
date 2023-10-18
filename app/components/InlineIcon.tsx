'use client';

import Image from "next/image";
import Underline from "@/app/components/Underline";

export default function InlineIcon({src, text}: {src: string, text: string}) {
    return (
        <span className={'inline-flex flex-nowrap hover:text-orange-400'}>
            <Image src={src} alt={text} className={'inline'} width={18} height={18} />&#8198;<Underline>{text}</Underline>
        </span>
    )
}