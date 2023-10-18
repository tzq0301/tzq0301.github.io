import React from "react";

export default function Underline({ children }: { children: React.ReactNode }) {
    return (
        <text className={'underline underline-offset-4'}>{children}</text>
    )
}