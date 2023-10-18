import React from "react";

export default function ListItem({left, right}: {left: React.ReactNode, right: React.ReactNode}) {
    return (
        <div className={'flex flex-row'}>
            <div className={'basis-1/6'}>
                {left}
            </div>
            <div className={'basis-5/6'}>
                {right}
            </div>
        </div>
    )
}