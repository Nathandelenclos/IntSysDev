import {FC, ReactNode} from "react";

export const H2: FC<{children: ReactNode}> = ({
    children
                   }) => {
    return (
        <h2 className="color-[#3B444B] text-4xl font-bold uppercase">
            {children}
        </h2>
    )
}