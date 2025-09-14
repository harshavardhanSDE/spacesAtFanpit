import React from "react";
import {cn} from "@/lib/utils";
type headerProps = {
    left?: React.ReactNode,
    center?:React.ReactNode,
    right?: React.ReactNode
}

function Header({left, center, right}: headerProps) {
    return (
        <header className={cn("w-full h-16 flex items-center justify-between p-4")}>
            <div className="flex-1 flex justify-start">
                {left}
            </div>

            <div className="flex-1 flex justify-center">
                {center}
            </div>

            <div className="flex-1 flex justify-end">
                {right}
            </div>
        </header>
    )
}

export default Header;