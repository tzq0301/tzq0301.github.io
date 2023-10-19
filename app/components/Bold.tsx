import React from "react";

export default function Bold({children}: { children: React.ReactNode }) {
    return (
        <text className={'font-bold text-black'}>{children}</text>
    )
}