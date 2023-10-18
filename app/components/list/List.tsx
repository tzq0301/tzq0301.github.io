import React, {Children} from "react";

export default function List({children}: {children: React.ReactNode}) {
    return (
        <div>
            {
                Children.map(children, child => (
                    <div className={'my-2'}>{child}</div>
                ))
            }
        </div>
    )
}