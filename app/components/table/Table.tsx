import React, {Children} from "react";

export default function Table({children}: { children: React.ReactNode }) {
    return (
        <div className={'flex flex-col'}>
            {
                Children.map(children, child => (
                    <div className={'my-2.5'}>{child}</div>
                ))
            }
        </div>
    )
}