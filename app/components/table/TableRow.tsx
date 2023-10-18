import React from "react";

export default function TableRow({left, right}: { left: React.ReactNode, right: React.ReactNode }) {
    return (
        <div className={'flex text-gray-700'}>
            <div className={'basis-1/4'}>
                {left}
            </div>
            <div className={'w-4'}></div>
            <div className={'basis-3/4'}>
                {right}
            </div>
        </div>
    )
}