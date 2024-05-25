import React from "react";

export default function Paragraph({children}: { children: React.ReactNode }) {
    return (
        <div className={'text-gray-800'}>
            {children}
        </div>
    )
}