import React from "react";

export default function Underline({ children }: { children: React.ReactNode }) {
    return (
        <text className={'underline underline-offset-[5px] decoration-black/60 decoration-1'}>{children}</text>
    )
}