'use client'

import React from "react";

import '@/app/page.css'

export default function Container({children}: { children: React.ReactNode }) {
    return (
        <div className={"font-serif flex justify-center items-center bg-zinc-50"}>
            <div className={"w-1/2"} id={'content-container'}>
                {children}
            </div>
        </div>
    )
}
